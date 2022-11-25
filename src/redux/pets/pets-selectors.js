const getIsLoading = state => state.userPets.isLoading;
const getUserPetsList = state => state.userPets.pets;

const authSelectors = {
  getIsLoading,
  getUserPetsList,
};
export default authSelectors;
