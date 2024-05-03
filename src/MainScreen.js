// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native-web';

const MainScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Lógica de logout
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Main Screen</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
        color="#dc3545"
      />
    </View>
  );
};

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
});

export default MainScreen;
