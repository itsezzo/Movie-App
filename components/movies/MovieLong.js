import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { colors, menuColors } from '../../constants/colors';
import IconButton from '../ui/IconButton';

export default function MovieLong({ imageUri, onPress, title, rate, released, clas, type }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
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
            <IconButton icon='star' color={menuColors.shade3} />
          </View>
          </View>
          <Text style={styles.text}>Released: {released}</Text>
          <Text style={styles.text}>Rated: {clas}</Text>
          <Text style={styles.text}>Type: {type}</Text>
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
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    flex: 1,
    height: 115,
  },
  textContainer: {
    flex: 2,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary50,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: menuColors.shade6,
    paddingLeft: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center'
},
  rate: {
    color: menuColors.shade3,
  },
});
