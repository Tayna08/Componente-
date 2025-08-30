import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Espelhador from "./Espelhador";
import Calculadora from "./Calculadora";

export default function App() {
  return (
    <View style={styles.container}>
      <Espelhador placeholder="Digite algo aqui..." />
      <Calculadora />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

