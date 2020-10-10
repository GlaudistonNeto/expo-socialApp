import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageScreen() {
  return (
    <View style={styles.contaner}>
      <Text>Message Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
