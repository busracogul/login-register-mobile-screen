import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import CButton from "../components/button";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 28, flex: 1 }}>
        <Image style={styles.image} source={require("../assets/welcome.png")} />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description}>
          Thank you for creating an account. Enjoy your experience in our app.
        </Text>
        <CButton label="Get Start" />
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
export default HomeScreen;
