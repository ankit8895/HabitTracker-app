import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
      localStorage.setItem('habitsLocal', JSON.stringify(state.habits));
    },
    deleteHabit: (state, action) => {
      const { id } = action.payload;

      state.habits = state.habits.filter((habit) => id !== habit.id);
      localStorage.setItem('habitsLocal', JSON.stringify(state.habits));
    },
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
        localStorage.setItem('habitsLocal', JSON.stringify(state.habits));
      }
    },
  },
});

export const habitReducer = habitSlice.reducer;
export const actions = habitSlice.actions;
