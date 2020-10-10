import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PostScreen() {
  return (
    <View style={styles.contaner}>
      <Text>Post Screen</Text>
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
