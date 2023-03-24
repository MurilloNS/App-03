import { Text } from "react-native";
import styles from "./styles";

export default function Result({ textResult }) {
  return (
    <>
      <Text style={styles.textResult}>Resultado: {textResult}</Text>
    </>
  );
}
