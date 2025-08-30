import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const valor1 = parseFloat(num1);
    const valor2 = parseFloat(num2);

    if (isNaN(valor1) || isNaN(valor2)) {
      setResultado("Digite números válidos!");
      return;
    }

    setResultado(valor1 + valor2);
  };

  const limpar = () => {
    setNum1("");
    setNum2("");
    setResultado(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Soma</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="Somar" onPress={somar} />

      <View style={{ marginVertical: 10 }}>
        {resultado !== null && (
          <Text style={styles.resultado}>Resultado: {resultado}</Text>
        )}
      </View>

      <Button title="Limpar" onPress={limpar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  resultado: {
    fontSize: 18,
    fontWeight: "600",
  },
});
