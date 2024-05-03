import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native-web';
import axios from 'axios';

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {   
    try {
      const response = await axios.post('http://http://localhost:3001//auth/authenticate', { email: username, password });
      console.log(response.data);
      // Se o login for bem-sucedido, você pode redirecionar para a próxima tela
      navigation.navigate('MainScreen');
    } catch (error) {
      console.error(error);
      // Tratar erros de autenticação, por exemplo, exibindo uma mensagem de erro para o usuário
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={handleLogin}
          color="#007bff"
        />
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('Registro')}
          color="#28a745"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default Login;
