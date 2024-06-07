import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { colors, menuColors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function MovieTall({ id ,imageUri, title, rate }) {
  const navigation = useNavigation();

  const modTitle = title.split(' ');
  if(modTitle.length > 4) {
    title = modTitle.slice(0,3).join(' ') + '...';
  }

  function handleDetail() {
    navigation.navigate('details', {showId: id})
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleDetail}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: colors.primary100 }}
      >
        <Image source={{ uri: imageUri }} style={styles.image} />

        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rate}>{rate} / 10</Text>
              <Ionicons style={styles.icon} name='star' color={menuColors.shade3} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
  container: {
    margin: 12,
    backgroundColor: colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderRadius: 25,
    overflow: 'hidden',
    width: 150,
    height: 200,
  },
  innerContainer: {
    flex: 1
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
  },
  image: {
    flex: 2,
    // width: '100%',
    // height: '50%',
  },
  textContainer: {
    flex: 1,
    paddingTop: 2,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary50,
  },
  titleContainer: {
    alignItems: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    color: menuColors.shade3,

  },
  icon: {
    margin: 8,
    borderRadius: 20,
  },
});
