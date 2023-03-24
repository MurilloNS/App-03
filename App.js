import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import Result from "./src/components/Result";

export default function App() {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    if (numeroUm === "" || numeroDois === "") {
      alert("É obrigatório digitar os dois números!");
    }

    setResultado(numeroUm * numeroDois);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Title title="Multiplicador de Números" />
        <Input text="Digite o primeiro nº" onChangeText={setNumeroUm} />
        <Input text="Digite o segundo nº" onChangeText={setNumeroDois} />
        <Button textButton="Calcular" onPress={calcular} />
        <Result textResult={resultado} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
