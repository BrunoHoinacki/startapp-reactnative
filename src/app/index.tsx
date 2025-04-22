import { View, Text, StyleSheet, Alert } from "react-native";

import { Button } from "./components/button";

export default function Index() {
    function handleMessage() {
        const name = "Bruno Hoinacki";
        Alert.alert("Olá " + name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Primeiro App</Text>
            <Button title="Entrar" onPress={handleMessage}/>
            <Button title="Sair" onPress={handleMessage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },

    title: {
        color: "#0654ba",
        fontSize: 24,
        fontWeight: "bold",
    }
});