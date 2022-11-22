const getIsLoggedIn = state => state.auth.isLoggedIn;
const getCities = state => state.auth.cities;
const getUsername = state => state.auth.user.name;
const getUserFavorite = state => state.auth.favorite;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getCities,
  getUserFavorite,
  getToken,
};
export default authSelectors;
