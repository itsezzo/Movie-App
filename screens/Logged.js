import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlaceHolder from '../components/ui/PlaceHolder';
import IconButton from '../components/ui/IconButton';

import { logout } from '../store/auth';
import { colors } from '../constants/colors';
import { StyleSheet, View } from 'react-native';

export default function Logged({ navigation }) {
  const isAuthenticate = useSelector(
    state => state.authentication.isAuthenticate
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color={colors.primary300}
            icon='exit-outline'
            onPress={handleLogOut}
            size={32}
          />
        );
      },
    });
  }, [isAuthenticate]);

  function handleLogOut() {
    dispatch(logout());
    // navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <PlaceHolder icon='person' massage='You Logged In' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
