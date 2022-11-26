const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getIsLoading = state => state.auth.isLoading;
const getCities = state => state.auth.cities;
const getBreeds = state => state.auth.breeds;
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
  getIsLoading,
  getBreeds,
  getIsRefreshing,
};
export default authSelectors;
