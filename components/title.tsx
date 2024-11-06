import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View
      style={{
        marginTop: 36,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: COLORS.primary,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 36,
    color: COLORS.secondary,
    textAlign: "center",
    marginHorizontal: 14,
    fontWeight: "500",
  },
});

export default Title;
