import { createSlice } from '@reduxjs/toolkit';
import { AsyncStorage } from 'react-native';

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
      state.isAuthenticate = !!state.token;
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

// import { createContext, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const authContext = createContext({
//   token: '',
//   isAuthenticate: false,
//   authenticate: token => {},
//   logout: () => {},
// });

// export default function AuthContextProvider({ children }) {
//   const [authToken, setAuthToken] = useState();

//   function authenticate(token) {
//     setAuthToken(token);
//     AsyncStorage.setItem('token', token);
//   }
//   function logout() {
//     setAuthToken(null);
//     AsyncStorage.removeItem('token');
//   }
//   const value = {
//     token: authToken,
//     isAuthenticate: !!authToken,
//     authenticate: authenticate,
//     logout: logout,
//   };

//   return <authContext.Provider value={value}>{children}</authContext.Provider>;
// }
