import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { router } from "expo-router";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Index() {
    const [name, setName] = useState("");

    function handleNext() {
        if (!name.trim()) {
            Alert.alert("Nome obrigatório", "Por favor, digite seu nome antes de continuar.");
            return;
        }

        router.push(`/dashboard?name=${encodeURIComponent(name)}`);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.title}>Olá, {name || "visitante"} 👋</Text>
                    <Input
                        onChangeText={setName}
                        placeholder="Digite seu nome"
                        autoCapitalize="words"
                        autoFocus
                    />
                    <Button
                        title="Continuar"
                        onPress={handleNext}
                        activeOpacity={0.7}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 20,
        backgroundColor: "#f7f9fc",
    },
    title: {
        color: "#0654ba",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
});
