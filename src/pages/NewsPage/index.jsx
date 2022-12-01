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
  const [disabledClean, setDisabledClean] = useState(true);
  const news = useSelector(newsSelectors.getNews);
  const [newsSlice, setNewsSlice] = useState([]);
  const status = useSelector(newsSelectors.getStatus);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    if (query !== '') {
      dispatch(getNews(query));
      setDisabledClean(false);
    }
  };

  const changeInput = e => {
    setQuery(e.target.value);
  };

  const handelClean = e => {
    setQuery('');
    dispatch(getNews());
    setDisabledClean(true);
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
              value={query}
              onInput={changeInput}
            />
            <button
              type="submit"
              className={s.btn}
              name="submit"
              aria-label="submit"
            >
              <Search />
            </button>
          </div>
          <button
            type="button"
            className={s.BtnCline}
            onClick={handelClean}
            disabled={disabledClean}
            name="clean"
            aria-label="clean"
          >
            Clean
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
