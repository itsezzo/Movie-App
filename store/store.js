import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import favReduser from './favorites';

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    favoriteMovies: favReduser,
  },
});
