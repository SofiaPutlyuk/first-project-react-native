import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World 👋 </Text>
      <Text style={styles.text}>How are you ?</Text>
      <Text>The wedding of Marta and Vlad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
