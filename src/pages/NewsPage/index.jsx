
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import s from './index.module.css';
import Container from 'components/Container';
import News from '../../components/News/index';
import { useSearchParams } from 'react-router-dom';
import getNews from '../../redux/news/news-operations';
import { RotatingLines } from 'react-loader-spinner';

export default function NewsPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setinputValue] = useState(searchParams.get('query') ?? '');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const news = useSelector(state => state.news.news);
  const status = useSelector(state => state.news.status);

  useEffect(() => {
    dispatch(getNews(query));
  }, [dispatch, query]);


  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      // Notiflix.Notify.failure('Enter a query');
      setinputValue('')
      return
    }
    setQuery(inputValue.trim());
    setSearchParams(
      inputValue.trim() !== ''
        ? { query: inputValue.trim() }
        : {}
    );
  };



  const handleChangeInput = event => {
    setinputValue(event.target.value)
  }
  return (
    <Container>
      <div className={s.newsContainer}>
        <h1 className={s.newsTitle}>News</h1>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.inputContainer} >
            <input
              className={s.input}
              onChange={handleChangeInput}
              value={inputValue}
              type="tel"
              name="number"
              placeholder='Search'
              required
            />
          </div>
          <button type="submit" className={s.btn}></button>
        </form>
        {!status && news.length > 0 &&
          <ul className={s.newList}>
            {news.map((item) => (<News key={item.title} news={item} />))}
          </ul>}
        {!status && news.length === 0 && (<div className={s.containerMessage}><p className={s.message}>No results were found for</p><p className={s.query}>{`${query}`}</p></div>)}
        {status && (<div className={s.Rotating}>
          <RotatingLines
            strokeColor="#F59256"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        </div>)}
      </div>
    </Container>
  );
}
