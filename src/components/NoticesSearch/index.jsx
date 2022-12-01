import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { noticesOperations } from 'redux/notices';
import { ReactComponent as Search } from '../../images/svg/search.svg';

export default function NoticesSearch() {
  const [query, setQuery] = useState('');
  const [disabledClean, setDisabledClean] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const pathnameArr = pathname.split('/');

  useEffect(() => {
    handelClean();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query !== '') {
      dispatchNotices(query);
      setDisabledClean(false);
    }
  };
  const handelClean = e => {
    setQuery('');
    dispatchNotices('');
    setDisabledClean(true);
  };
  const dispatchNotices = query => {
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
  };
  return (
    <>
      <div className={s.SearchContainer}>
        <h2 className={s.SearchTitle}>Find your favorite pet</h2>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <input
              className={s.SearchInput}
              type="text"
              name="search"
              autoFocus
              placeholder="Search"
              value={query}
              onInput={e => setQuery(e.target.value)}
            />
            <button
              className={s.SearchBtn}
              type="submit"
              name="search"
              aria-label="search"
            >
              <Search />
            </button>
          </div>
          <button
            type="button"
            className={s.BtnCline}
            onClick={handelClean}
            disabled={disabledClean}
            name="clean search"
            aria-label="clean search"
          >
            Clean
          </button>
        </form>
      </div>
    </>
  );
}
