import { configureStore } from '@reduxjs/toolkit';
import { habitReducer } from './reducers/habitReducer';

const habitsInfoFromStorage = localStorage.getItem('habitsLocal')
  ? JSON.parse(localStorage.getItem('habitsLocal'))
  : [];

const preloadedState = {
  habitReducer: {
    habits: habitsInfoFromStorage,
  },
};

const store = configureStore({
  reducer: {
    habitReducer,
  },
  preloadedState,
});

export default store;
