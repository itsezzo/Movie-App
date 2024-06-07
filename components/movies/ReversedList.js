import { View, FlatList, StyleSheet, Text } from 'react-native';
import { colors, menuColors } from '../../constants/colors';
import MovieTall from './MovieTall';

function handleRandering(dataItem) {
  const item = dataItem.item;
  const items = {
    id: item.id,
    title: item.title,
    rate: item.rate,
    imageUri: item.imageUri,
  };
  return <MovieTall {...items} />;
}

export default function ReversedList({ movies, title, bgc }) {
  return (
    <View style={[styles.pannel, bgc]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        renderItem={handleRandering}
        keyExtractor={item => item.id}
        data={movies}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pannel: {
    backgroundColor: menuColors.shade1,
    margin: 12,
    borderRadius: 25,
    height: 260,
    overflow: 'hidden',
  },
  titleContainer: {
    backgroundColor: colors.primary600,
    width: '60%',
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
