import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {},
});

export const habitReducer = habitSlice.reducer;
