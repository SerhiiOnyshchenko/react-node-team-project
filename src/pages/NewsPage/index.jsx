import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css';
import Container from 'components/Container';
import News from '../../components/News/index';
import getNews from 'redux/news/news-operations';
import { RotatingLines } from 'react-loader-spinner';
import { newsSelectors } from '../../redux/news';
import Pagination from 'components/Pagination';
import { ReactComponent as Search } from '../../images/svg/search.svg';

export default function NewsPage() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const news = useSelector(newsSelectors.getNews);
  const [newsSlice, setNewsSlice] = useState([]);
  const status = useSelector(newsSelectors.getStatus);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getNews(e.target.search.value));
    setQuery(e.target.search.value);
  };

  const changeInput = e => {
    e.preventDefault();
    if (e.target.value === '') {
      dispatch(getNews(e.target.value));
      setQuery(e.target.value);
    }
  };

  return (
    <Container>
      <div className={s.newsContainer}>
        <h1 className={s.newsTitle}>News</h1>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              type="search"
              name="search"
              placeholder="Search"
              onInput={changeInput}
            />
          </div>
          <button type="submit" className={s.btn}>
            <Search />
          </button>
        </form>
        {!status && newsSlice.length > 0 && (
          <ul className={s.newList}>
            {newsSlice.map(item => (
              <News key={item._id} news={item} />
            ))}
          </ul>
        )}
        {!status && newsSlice.length === 0 && (
          <div className={s.containerMessage}>
            <p className={s.message}>No results were found for</p>
            <p className={s.query}>{query}</p>
          </div>
        )}
        {status && (
          <div className={s.Rotating}>
            <RotatingLines
              strokeColor="#F59256"
              strokeWidth="5"
              animationDuration="0.75"
              width="150"
              visible={true}
            />
          </div>
        )}
      </div>
      {news && (
        <Pagination
          totalHits={news.length}
          pageSize={6}
          data={news}
          setData={n => {
            setNewsSlice(n);
          }}
        />
      )}
    </Container>
  );
}
