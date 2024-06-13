import { createSlice } from '@reduxjs/toolkit';

const currentViewSlice = createSlice({
  name: 'focus',
  initialState: {
    toShow: 'landing',
  },
  reducers: {
    changeToShow: (state, action) => {
      if (action.payload === 'landing') state.toShow = 'landing';
      else if (action.payload === 'about') state.toShow = 'about';
      else if (action.payload === 'project') state.toShow = 'project';
      else if (action.payload === 'contact') state.toShow = 'contact';
    },
  },
});

export const { changeToShow } = currentViewSlice.actions;
export default currentViewSlice.reducer;
