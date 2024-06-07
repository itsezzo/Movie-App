import { useLayoutEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import LoadingOverlay from '../components/ui/LoadingOverlay';

import { addMovie, removeMovie } from '../store/favorites';

import { colors, menuColors } from '../constants/colors';
import { getMovieById } from '../utils/movies';
import Detail from '../components/movies/Detail';
import IconButton from '../components/ui/IconButton';

export default function ShowDetails({ navigation, route }) {
  const [show, setShow] = useState();
  const favShowsId = useSelector(state => state.favoriteMovies.ids);
  const isAuthenticate = useSelector(state => state.authentication.isAuthenticate);
  const dispatch = useDispatch();
  const id = route.params.showId;

  const showIsFaved = favShowsId.includes(id);

  function handleShowFaves() {
    // if(!isAuthenticate) {
    //   navigation.setOptions({
    //     header: () => {
    //       return(
    //         <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary50}}>
    //           <Text style={{textAlign: 'center', color: colors.primary600}}>You must Log In</Text>
    //         </View>
    //       )
    //     }
    //   })
    // }

    // I've tried 

    if (!showIsFaved && isAuthenticate) {
      dispatch(addMovie(id));
    } else {
      dispatch(removeMovie(id));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerRight: () => {
        return (
          <IconButton
            icon={showIsFaved && isAuthenticate ? 'star' : 'star-outline'}
            onPress={handleShowFaves}
            color={menuColors.shade6}
            size={24}
          />
        );
      },
      headerTitle: '',
    });
    getShow();
  }, [getShow, handleShowFaves, navigation]);

  async function getShow() {
    const show = await getMovieById(id);
    setShow(show);
  }

  return (
    <>
      {show ? (
        <ScrollView
          style={styles.container}
          nestedScrollEnabled={true}
        >
          <Image style={styles.image} source={{ uri: show.Poster }} />
          <Detail show={show} />
        </ScrollView>
      ) : (
        <LoadingOverlay message='LOADING' />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    height: '60%',
  },
  textContainer: {
    margin: 12,
  },
  text: {
    color: colors.primary500,
  },
  headerSymbol: {
    margin: 24,
  },
});
