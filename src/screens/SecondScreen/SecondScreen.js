import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function SecondScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Button
        accessibilityLabel="thirdButton"
        title="ThirdScreen"
        onPress={() => navigate('ThirdScreen')}
      />
    </View>
  );
}

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
