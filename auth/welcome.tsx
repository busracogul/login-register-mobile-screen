import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import CButton from "../components/button";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 28, flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../assets/shopping.png")}
        />
        <Text style={styles.title}>All you need is in one place</Text>
        <Text style={styles.description}>
          The world's largest fashion e-commerce has arrived. Shop now!
        </Text>
        <CButton label="Log In" route="login" />
        <CButton label="Sign Up" route="signup" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 400,
    objectFit: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "center",
  },
  description: {
    color: COLORS.secondary,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 16,
  },
});
export default WelcomeScreen;
