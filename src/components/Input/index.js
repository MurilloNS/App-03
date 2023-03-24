import { TextInput } from "react-native";
import styles from "./styles";

export default function Input({ text, onChangeText }) {
  return (
    <>
      <TextInput
        keyboardType="numeric"
        style={styles.inputMult}
        placeholder={text}
        onChangeText={onChangeText}
      />
    </>
  );
}
