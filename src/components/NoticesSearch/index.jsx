import React from 'react';
import s from './index.module.css';
import PropTypes from 'prop-types';

export default function NoticesSearch({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.search.value;
    onSearch(query);
    evt.target.search.value = '';
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
            required
          />
          <button className={s.SearchBtn} type="submit"></button>
        </form>
      </div>
    </>
  );
}

NoticesSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
