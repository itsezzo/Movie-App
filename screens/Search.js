import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import SearchBar from '../components/ui/SearchBar';
import MovieLong from '../components/movies/MovieLong';
import PlaceHolder from '../components/ui/PlaceHolder';

import { search, getMovieById } from '../utils/movies';
import { colors, menuColors } from '../constants/colors';

export default function Search() {
  const [movieList, setMovieList] = useState([]);
  const [movieIds, setMovieIds] = useState([]);
  const [response, setResponse] = useState(false);
  const [totalResults, setTotalResults] = useState();

  useEffect(() => {
    // console.log(response);
    // console.log(movieIds);
    nextArray();
    // console.log(movieList);
  }, [response, movieIds, totalResults]);

  async function nextArray() {
    const movies = await Promise.all(
      movieIds.map(async item => await getMovieById(item))
    );
    setMovieList(movies);
  }

  async function handleInput(enteredText) {
    const result = await search(enteredText);
    const searchResponse = result.Response === 'True' ? true : false;
    setResponse(searchResponse);
    setTotalResults(result.totalResults);
    if (searchResponse) {
      const ids = result.Search.map(item => item.imdbID);
      setMovieIds([...ids]);
    }
  }

  function handleItems(dataItem) {
    const items = dataItem.item;
    const item = {
      id: items.imdbID,
      imageUri: items.Poster,
      title: items.Title,
      rate: items.imdbRating,
      released: items.Year,
      clas: items.Rated,
      type: items.Type,
    };
    return <MovieLong {...item} />;
  }

  let searchNumber = totalResults
    ? `There are ${totalResults} results`
    : "Seems like there's too much results or nothing.";

  let page = response ? (
    <FlatList
      style={styles.list}
      renderItem={handleItems}
      keyExtractor={item => item.imdbID}
      data={movieList}
    />
  ) : (
    <PlaceHolder icon='search' massage='Enter something' />
  );

  return (
    <View style={styles.container}>
      <SearchBar label='Looking for somrthing?' onInput={handleInput} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{searchNumber}</Text>
      </View>
      {page}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    backgroundColor: colors.primary100,
    paddingVertical: 8,
  },
  text: {
    textAlign: 'center',
    color: menuColors.shade5,
  },
  list: {
    marginBottom: 50,
  },
});
