import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ReversedList from '../components/movies/ReversedList';

import { getShowByTitle } from '../utils/movies';
import { colors, menuColors } from '../constants/colors';

import { allLists } from '../models/data';

export default function Home() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows(allLists)
  }, []);

  async function getShows(arr) {
    const bigList = [];
    for (let i = 0; i < 4; i++) {
      const zist = await Promise.all(arr[i].map(async item => {
        const result = await getShowByTitle(item);
        const modElem = {
          id: result.imdbID,
          title: result.Title,
          imageUri: result.Poster,
          rate: result.imdbRating,
        };
        return modElem;
      }))
      bigList.push(zist);
    }

    setShows(bigList);
  }

  return (
    <ScrollView style={styles.container}>
      <ReversedList title='Top 10 Movies' movies={shows[0]} />
      <ReversedList
        title='Top Box Office'
        movies={shows[1]}
        bgc={{ backgroundColor: menuColors.shade2 }}
      />
      <ReversedList
        title='Top 10 TV-Shows'
        movies={shows[2]}
        bgc={{ backgroundColor: menuColors.shade3 }}
      />
      <ReversedList
        title='Recent TV-Shows'
        movies={shows[3]}
        bgc={{ backgroundColor: menuColors.shade4 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 48,
  },
  input: {
    backgroundColor: colors.primary300,
    margin: 20,
    padding: 20,
  },
});
