import React, { useState } from 'react';
import s from './index.module.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { noticesOperations } from 'redux/notices';
import { ReactComponent as Search } from '../../images/svg/search.svg';

export default function NoticesSearch() {
  const [query, setQuery] = useState('');
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const pathnameArr = pathname.split('/');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (pathnameArr[2] === 'sell') {
      dispatch(
        noticesOperations.getNoticesCategories({ category: 'sell', query })
      );
    }
    if (pathnameArr[2] === 'lost-found') {
      dispatch(
        noticesOperations.getNoticesCategories({
          category: 'lost/found',
          query,
        })
      );
    }
    if (pathnameArr[2] === 'for-free') {
      dispatch(
        noticesOperations.getNoticesCategories({
          category: 'in_good_hands',
          query,
        })
      );
    }
    setQuery('');
  };

  return (
    <>
      <div className={s.SearchContainer}>
        <h2 className={s.SearchTitle}>Find your favorite pet</h2>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <input
            className={s.SearchInput}
            type="text"
            name="search"
            autoFocus
            placeholder="Search"
            value={query}
            onInput={e => setQuery(e.target.value)}
            required
          />
          <button className={s.SearchBtn} type="submit">
            <Search />
          </button>
        </form>
      </div>
    </>
  );
}
