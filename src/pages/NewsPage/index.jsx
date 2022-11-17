
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import s from './index.module.css';
import Container from 'components/Container';
import News from '../../components/News/index';
import { useSearchParams } from 'react-router-dom';
import getNews from '../../redux/news/news-operations';

export default function NewsPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setinputValue] = useState(searchParams.get('query') ?? '');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const news = useSelector(state => state.news.news);

  useEffect(() => {
    // setIsLoading(true);
    dispatch(getNews(query))
    console.log('query', query);
    // console.log()
    // .then(data => {
    //   setNews(data.results);
    //   // console.log(data.results);
    //   // if (data.results.length === 0) {
    //   //   Notiflix.Notify.failure(
    //   //     'Sorry, there are no news matching your search query. Please try again.'
    //   //   );
    //   // }
    // })
    // .catch(error => {
    //   console.error(error);
    // }).finally(() => {
    //   // setIsLoading(false);
    // });
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
          <input
            className={s.input}
            onChange={handleChangeInput}
            value={inputValue}
            type="tel"
            name="number"
            placeholder='Search'
            required
          />
          <button type="submit" className={s.btn}></button>
        </form>
        <ul className={s.newList}>
          {news.map(item => (
            <News key={item.title} news={item} />
          ))}
        </ul>
        {/* /* <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {status === 'fetch' && items.length === 0 && (<div className={css.Loader}>
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
            />
        </div>)}
        // {userStatus !== 'refreshUser' && <ContactList />  */}
      </div>
    </Container>
  );
}
