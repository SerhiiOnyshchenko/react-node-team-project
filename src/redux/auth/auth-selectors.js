const getIsLoggedIn = state => state.auth.isLoggedIn;
const getCities = state => state.auth.cities;
const getUsername = state => state.auth.user.name;


const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getCities,
};
export default authSelectors;
