import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import s from './index.module.css';

export default function AppPagination({ totalPages, news, setNews }) {
  const pageSize = 6;
  const totalHits = 6;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const getData = () => {
    return new Promise((resolve, reject) => {
      if (!news) {
        return;
      }
      resolve({ data: news.slice(pagination.from, pagination.to) });
    });
  };

  useEffect(() => {
    if (totalPages) {
      setPagination({ ...pagination, count: totalHits });
    }
    getData().then(res => {
      const items = res.data;
      setNews(items);
    });
  }, [totalPages, pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    pageSize > totalHits && (
      <Pagination
        className={s.pagination}
        count={Math.ceil(pagination.count / pagination.to)}
        onChange={handlePageChange}
      />
    )
  );
}
