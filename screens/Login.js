import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

import { logUser } from '../utils/auth';
import { authenticate } from '../store/auth';
// import { authContext } from '../store/auth-context';

export default function Login({navigation}) {
  const [isAuthentication, setIsAuthentication] = useState(false);
  // const isAuthenticate = useSelector(state => state.authentication.isAuthenticate);
  const dispatch = useDispatch();
  // const authCtx = useContext(authContext);
  // navigation.setOptions({
  //   headerRight: 
  // })
  async function handlelogin({ email, password }) {
    setIsAuthentication(true);
    try {
      const token = await logUser(email, password);
      dispatch(authenticate(token));
      console.log(token)
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
