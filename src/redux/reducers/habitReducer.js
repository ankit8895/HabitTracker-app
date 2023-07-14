import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  habits: [],
};

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.loading = false;
      state.habits.push(action.payload);
    },
    deleteHabit: (state, action) => {
      state.loading = false;
    },
  },
});

export const habitReducer = habitSlice.reducer;
export const actions = habitSlice.actions;
