import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default function SearchBar({label, onInput}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput onChangeText={onInput} style={styles.textInput} placeholder="movies, series, episode..."/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary500,
        paddingVertical: 12
    },
    label: {
        color: colors.primary100,
        fontWeight: "bold",
        paddingLeft: 12,
        paddingBottom: 4,
    },
    textInput: {
        borderRadius: 12,
        backgroundColor: colors.primary50,
        marginVertical: 6,
        marginHorizontal: 4,
        padding: 4,
        paddingHorizontal: 8,
        color: colors.primary500
    },
})