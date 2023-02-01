import { ActivityIndicator, StyleSheet, View } from "react-native";


export function Loading() {

    return (
        <View style={styles.container}>
            <ActivityIndicator color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#357AE8',
        alignItems: 'center',
        justifyContent: 'center',
      },
})