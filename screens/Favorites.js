import { FlatList, ScrollView, View, StyleSheet } from 'react-native';
import PlaceHolder from '../components/ui/PlaceHolder';
import { useSelector } from 'react-redux';
import { getMovieById } from '../utils/movies';
import { useEffect, useState } from 'react';
import MovieLong from '../components/movies/MovieLong';

export default function Favorites() {
  const [showsList, setShowsList] = useState([]);
  const showFavedIds = useSelector(state => state.favoriteMovies.ids);
  const isAuthenticate = useSelector(
    state => state.authentication.isAuthenticate
  );

  useEffect(() => {
    getShows();
  }, [showsList]);

  async function getShows() {
    const shows = await Promise.all(
      showFavedIds.map(async item => {
        const result = await getMovieById(item);
        // console.log(result);
        const show = {
          id: result.imdbID,
          imageUri: result.Poster,
          title: result.Title,
          rate: result.imdbRating,
          released: result.Year,
          clas: result.Rated,
          type: result.Type,
        };
        return show;
      })
    );
    setShowsList(shows);
  }

  //   handleData()
  function handleData(dataItem) {
    const item = dataItem.item;
    //   console.log(item);
    return <MovieLong {...item} />;
  }

  let nestedCond =
    showsList.length > 0 ? (
      <FlatList
        data={showsList}
        renderItem={handleData}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    ) : (
      <PlaceHolder icon='star-outline' massage='Pich Your Favs' />
    );

  return (
    <View style={styles.container}>
      {isAuthenticate ? (
        {nestedCond}
      ) : (
        <PlaceHolder
          icon='star-outline'
          massage='Log in or Sign up to pick your faves'
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginBottom: 48,
  },
});
