import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Button } from "@/components/button";

export default function Dashboard() {
    const { name } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {name || "usuário"}! 🎉</Text>
            <Text style={styles.subtitle}>Que bom te ver por aqui.</Text>

            <Button
                title="Voltar"
                onPress={() => router.back()}
                activeOpacity={0.7}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: 20,
        backgroundColor: "#f7f9fc",
    },
    title: {
        color: "#0654ba",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitle: {
        color: "#333",
        fontSize: 16,
        textAlign: "center",
    },
});
