import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

import { logUser } from '../utils/auth';
import { authenticate } from '../store/auth';

export default function Login({ navigation }) {
  const [isAuthentication, setIsAuthentication] = useState(false);
  

  const dispatch = useDispatch();
  

  useEffect(() => {
  }, [isAuthentication])


  async function handlelogin({ email, password }) {
    setIsAuthentication(true);
    try {
      const token = await logUser(email, password);
      dispatch(authenticate(token));
      // console.log('inside Login');
      // console.log(token);
      navigation.replace('loggedin')
    } catch (error) {
      Alert.alert(
        'Authentication Failed!',
        "Couldn't log you in please check your credentials or Try again later."
      );
      setIsAuthentication(false);
    }
  }

  if (isAuthentication) {
    return <LoadingOverlay message='Logging You in...' />;
  }

  return <AuthContent isLogin onAuthenticate={handlelogin} />;
}
