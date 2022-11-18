import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000/api';
let result;

export const getNews = createAsyncThunk('news/getNews', async (query) => {
console.log('query 8 строка',query);
  try {
    if(query === undefined || query === ''){
     result = await axios.get('/news');
     console.log("result",result);
     console.log('query === undefined');
    }
    if(query){
      result = await axios.get(`/news?query=${query}`);
      console.log('query есть');
    }
  
   
    console.log('data in getNews',result.data.data);
    return result.data.data;
  } catch (error) {
    console.log('fetch-news-error', error);
  }
});
export default getNews;