import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import s from './index.module.css';

export default function AppPagination({ totalHits, pageSize, data, setData }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const getData = () => {
      return new Promise((resolve, reject) => {
        if (!data) {
          return;
        }
        resolve({ data: data });
      });
    };

    setPagination({ ...pagination, count: totalHits });
    getData().then(res => {
      if (data) {
        const items = res.data.slice(pagination.from, pagination.to);
        setData(items);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    pageSize < totalHits && (
      <Pagination
        className={s.pagination}
        count={Math.ceil(totalHits / pageSize)}
        onChange={handlePageChange}
      />
    )
  );
}
