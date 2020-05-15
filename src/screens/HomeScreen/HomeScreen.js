import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Button title="FirstScreen" onPress={() => navigate('FirstScreen')} />
      <Button title="SecondScreen" onPress={() => navigate('SecondScreen')} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
