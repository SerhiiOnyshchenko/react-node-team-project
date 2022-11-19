const getNews = state => state.news.news;
const getStatus = state => state.news.status;

const newsSelectors = {
    getNews,
    getStatus ,
  };
  export default newsSelectors;