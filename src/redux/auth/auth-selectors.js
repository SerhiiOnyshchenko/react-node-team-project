const getIsLoggedIn = state => state.auth.isLoggedIn;
const getCities = state => state.auth.cities;
const getUsername = state => state.auth.user.name;
const getUser = state => state.auth.user;
const getUserToken = state => state.auth.token;
const getUserFavorite = state => state.auth.favorite;
const getDisabledBtn = state => state.auth.disabledBtn;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getCities,
  getUserFavorite,
  getUser,
  getUserToken,
  getDisabledBtn,
};
export default authSelectors;
