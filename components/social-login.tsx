import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../constants";

const SocialLogin = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 28,
          color: COLORS.secondary,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        -OR-
      </Text>

      <View
        style={{
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          marginTop: 24,
        }}
      >
        <View style={styles.app_logo}>
          <FontAwesome name="facebook" size={24} color="rgb(83,117,244)" />
        </View>
        <View style={styles.app_logo}>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
            }}
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View style={styles.app_logo}>
          <AntDesign name="apple1" size={24} color="rgb(99,102,105)" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app_logo: {
    borderRadius: 48,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    padding: 8,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SocialLogin;
