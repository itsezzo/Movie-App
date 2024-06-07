import { createSlice } from '@reduxjs/toolkit';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    token: '',
    isAuthenticate: false,
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      AsyncStorage.setItem('token', action.payload);
      state.isAuthenticate = true;
    },
    logout: state => {
      state.token = null;
      AsyncStorage.removeItem('token');
      state.isAuthenticate = !!state.token;
    },
  },
});


export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
