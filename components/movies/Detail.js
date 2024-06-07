import { View, Text, StyleSheet } from 'react-native';

import { colors, menuColors } from '../../constants/colors';
export default function Detail({ show }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{show.Title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Rate: {show.imdbRating}</Text>
        <Text style={styles.text}>Released Date: {show.Year}</Text>
        <Text style={styles.text}>Genre: {show.Genre}</Text>
        <Text style={styles.text}>Language: {show.Language}</Text>
        <Text style={styles.text}>Plot: {show.Plot}</Text>
        <Text style={styles.text}>Awards: {show.Awards}</Text>
        <Text style={styles.text}>Actors: {show.Actors}</Text>
        <Text style={styles.text}>---------------------</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    margin: 12,
    borderRadius: 6,
    backgroundColor: menuColors.shade6,
    padding: 12,
  },
  textContainer: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: menuColors.shade5,
    padding: 6,
    paddingBottom: 600
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  color: menuColors.shade5,
textAlign: 'center',
  },
  text: {
    color: menuColors.shade6,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 6,
    alignItems: 'center'
  },
});
