const getNews = state => state.news.news.data;
const getStatus = state => state.news.status;
const getTotalPages = state => state.news.news.totalPages;

const newsSelectors = {
  getNews,
  getStatus,
  getTotalPages,
};
export default newsSelectors;
