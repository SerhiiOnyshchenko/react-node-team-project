import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getUserPet = createAsyncThunk('pet/getUserPet', async () => {
  try {
    const { data } = await axios.get('/user/current');
    return data.user.pets;
  } catch (error) {
    console.log(error);
  }
});

// const addUserPet = createAsyncThunk('pet/addUserPet', async newPet => {
//   try {
//     const header = {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//       },
//     };
//     await axios.post('/pet', header, newPet);
//     const { data } = await axios.get('/user/current');
//     toast.success('New pet added!');
//     return data.pets;
//   } catch (error) {
//     console.log(error);
//   }
// });

const addUserPet = createAsyncThunk(
  'pet/addUserPet',
  async ({ formData, token }) => {
    try {
      const config = { ...formData };
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      await axios.post('/pet', config, header);
      const { data } = await axios.get('/user/current');
      toast.success('New pet added!');
      return data.user.pets;
    } catch (error) {
      console.log(error);
    }
  }
);

const deleteUserPet = createAsyncThunk('pet/deleteUserPet', async petId => {
  try {
    await axios.delete(`/pet/${petId}`);
    const { data } = await axios.get('/user/current');
    toast.success(`Contact was deleted!`);
    return data.user.pets;
  } catch (error) {
    console.log(error);
  }
});

// const patchUserInfo = createAsyncThunk(
//   'auth/patchUserInfo',
//   async ({ type, value, token }) => {
//     try {
//       const config = {
//         [type]: value,
//       };
//       const header = {
//         headers: {
//           Accept: 'application/json',
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       };
//       const { data } = await axios.patch('/user/update', config, header);
//       return data;
//     } catch (error) {
//       const { message } = error.response.data.message;
//       toast.error(message);
//     }
//   }
// );

const operations = {
  getUserPet,
  addUserPet,
  deleteUserPet,
};
export default operations;
