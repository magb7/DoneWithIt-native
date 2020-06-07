import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Text>Hello React Native</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
