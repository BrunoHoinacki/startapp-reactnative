import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress}: Props) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}