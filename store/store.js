import { configureStore } from '@reduxjs/toolkit';
import AnimeReducer from './slices/animeListSlice';
import userReducer from './slices/userSlice';
import loginReducer from './slices/LogInSlice';

const store = configureStore({
  reducer: {
    anime: AnimeReducer,
    user: userReducer,
    login: loginReducer,
  },
});

export default store;
