const getNews = state => state.news.news.data;
const getStatus = state => state.news.status;

const newsSelectors = {
    getNews,
    getStatus ,
  };
  export default newsSelectors;