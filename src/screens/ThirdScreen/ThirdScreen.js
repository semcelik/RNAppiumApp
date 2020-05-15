import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function ThirdScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Button title="Return Home" onPress={() => navigate('HomeScreen')} />
    </View>
  );
}

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
