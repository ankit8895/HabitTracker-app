//import configureStore
import { configureStore } from '@reduxjs/toolkit';
//import habitReducer
import { habitReducer } from './reducers/habitReducer';

//getting habits array from the localStorage
const habitsInfoFromStorage = localStorage.getItem('habitsLocal')
  ? JSON.parse(localStorage.getItem('habitsLocal'))
  : [];

//preloadedState
const preloadedState = {
  habitReducer: {
    habits: habitsInfoFromStorage,
  },
};

//creating the store
const store = configureStore({
  reducer: {
    habitReducer,
  },
  preloadedState,
});

//export store
export default store;
