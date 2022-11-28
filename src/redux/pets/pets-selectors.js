const getIsLoading = state => state.userPets.isLoading;
const getUserPetsList = state => state.userPets.pets;

const petsSelectors = {
  getIsLoading,
  getUserPetsList,
};
export default petsSelectors;
