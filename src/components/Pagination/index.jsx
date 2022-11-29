import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import s from './index.module.css';
import { useLocation } from 'react-router-dom';

export default function AppPagination({ totalHits, pageSize, data, setData }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    page: 1,
    to: pageSize,
  });
  const { pathname } = useLocation();
  useEffect(() => {
    setPagination({
      count: 0,
      from: 0,
      page: 1,
      to: pageSize,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
        if (data.length <= pageSize) {
          setData(data);
          return;
        }
        const items = res.data.slice(pagination.from, pagination.to);
        setData(items);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, page, to: to });
  };

  return (
    pageSize < totalHits && (
      <Pagination
        className={s.pagination}
        count={Math.ceil(totalHits / pageSize)}
        page={pagination.page}
        onChange={handlePageChange}
      />
    )
  );
}
