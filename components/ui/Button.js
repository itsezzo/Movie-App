import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colors';

export default function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.inside}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // overflow: 'hidden',
    // overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
