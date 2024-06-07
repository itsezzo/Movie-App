import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.ids.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export const addMovie = favSlice.actions.addMovie;
export const removeMovie = favSlice.actions.removeMovie;
export default favSlice.reducer;