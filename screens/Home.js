import { View, Text, StyleSheet, TextInput } from 'react-native';

import IconButton from '../components/ui/IconButton';
import { getMovieByTitle, search } from '../utils/movies';
import { colors } from '../constants/colors';
import MovieLong from '../components/movies/MovieLong';
import MovieTall from '../components/movies/MovieTall';

export default function Home() {
  async function handleInput(enteredText) {
    try {
      await search(enteredText);
    } catch (error) {
      throw error;
    }
    // getMovieByTitle(enteredText);
    // console.log(movie)
  }
  return (
    <View>
      <Text>Home Page</Text>
      <TextInput style={styles.input} onChangeText={handleInput} />
      <IconButton icon='exit-outline' color={colors.primary300} size={30}>
        on Click
      </IconButton>
      <MovieLong
        imageUri='https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
        title='Joker'
        clas='R+'
        released={2019}
        type='Movie'
        rate={8.4}
      />
      <MovieTall
        imageUri='https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
        title='Joker'
        clas='R+'
        released={2019}
        type='Movie'
        rate={8.4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.primary300,
    margin: 20,
    padding: 20,
  },
});
