import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {},
    deleteHabit: (state, action) => {},
  },
});

export const habitReducer = habitSlice.reducer;
export const actions = habitSlice.actions;
