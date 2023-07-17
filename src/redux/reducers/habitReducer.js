//import createSlice
import { createSlice } from '@reduxjs/toolkit';

//initialState
const initialState = {
  habits: [],
};

//create a slice HabitSlice
const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    // to add habit to the state
    addHabit: (state, action) => {
      state.habits.push(action.payload);
      // save the updated habits array in the local storage
      localStorage.setItem('habitsLocal', JSON.stringify(state.habits));
    },
    // to delete habit from state
    deleteHabit: (state, action) => {
      const { id } = action.payload;
      state.habits = state.habits.filter((habit) => id !== habit.id);
      // save the updated habits array in the local storage
      localStorage.setItem('habitsLocal', JSON.stringify(state.habits));
    },
    // to toggle the status of the habit
    toggleHabit: (state, action) => {
      const { habitId, status, statusIndex } = action.payload;

      const habitToUpdate = state.habits.find((habit) => habit.id === habitId);

      if (habitToUpdate) {
        const updatedHabits = state.habits.map((habit) => {
          if (habit.id === habitId) {
            const updatedStatus = habit.status ? [...habit.status] : [];
            if (updatedStatus.length <= statusIndex) {
              updatedStatus.length = statusIndex + 1;
            }
            updatedStatus[statusIndex] = status;

            return {
              ...habit,
              status: updatedStatus,
            };
          }
          return habit;
        });

        state.habits = updatedHabits;
        // save the updated habits array in the local storage
        localStorage.setItem('habitsLocal', JSON.stringify(state.habits));
      }
    },
  },
});

//export habit reducer
export const habitReducer = habitSlice.reducer;
//export actions of reducer
export const actions = habitSlice.actions;
