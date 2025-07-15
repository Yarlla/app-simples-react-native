import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handlePress = () => {
    if (nome.trim() === '') {
      setMensagem('Digite algo primeiro!');
    } else {
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App com Expo 🚀</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Enviar" onPress={handlePress} />

      {mensagem !== '' && <Text style={styles.resultado}>{mensagem}</Text>}
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '500',
  },
});