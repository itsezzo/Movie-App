import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

export default function PlaceHolder({ icon, massage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{massage}</Text>
      <Ionicons name={icon} size={200} color={colors.primary300} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: colors.primary600,
    marginBottom: 30
  },
});
