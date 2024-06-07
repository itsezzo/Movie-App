import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/auth/Login';
import PlaceHolder from '../components/ui/PlaceHolder';
import IconButton from '../components/ui/IconButton';

import { logout } from '../store/auth';

export default function Account({navigation}) {
  const isAuthenticate = useSelector(
    state => state.authentication.isAuthenticate
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: ({color}) => {
            return(
                <IconButton color={color} icon='exit' onPress={handleLogOut} />
            )
        }
    })
  }, [isAuthenticate])

  function handleLogOut() {
    dispatch(logout());
  }

  return (
    <>
      {isAuthenticate ? <Login /> : <PlaceHolder icon='person' massage='You Logged In' />}
    </>
  );
}
