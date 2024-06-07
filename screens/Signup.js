import { useState } from 'react';
import { useDispatch } from 'react-redux';

import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

import { createUser } from '../utils/auth';
import { Alert } from 'react-native';

import { authenticate } from '../store/auth';

export default function Signup() {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const dispatch = useDispatch();  

  async function handleSignup({email, password}) {
    setIsAuthentication(true);
    try {
      const token = await createUser(email, password);
      dispatch(authenticate(token));
      console.log(token);
      // authCtx.authenticate(token);
    } catch(error) {
      Alert.alert('Authentication Failed!', "Couldn't Sign you up please check your validition or Try again later.")
      setIsAuthentication(false);
    }
  }
  
  if(isAuthentication) {
    return <LoadingOverlay message='Creating New User...' />
  }

  return <AuthContent onAuthenticate={handleSignup} />;
}

