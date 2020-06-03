import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text>FirstScreesn</Text>
    </View>
  );
}

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
