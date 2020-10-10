import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PostScreen() {
  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="md-arrow-back" size={24} color="#D8D9DB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontWeight: "500" }}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.avatar}
        />
        <TextInput
          outoFocus={true}
          multilene={true}
          numberOfLines={4}
          style={{ flex: 1 }}
          placeholder="Want to share something?"
        />

        <TouchableOpacity style={styles.photo}>
          <Ionicons name="md-camera" size={32} color="#D8D9DB" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DB",
  },
  inputContainer: {
    margin: 32,
    flexDirection: "row",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32,
  },
});
