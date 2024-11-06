import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const CButton = ({ label, prePage, currentPage, route }: { label: string, prePage?:string, currentPage?: string, route:string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.primary_button}
      onPress={() => {
        navigation.navigate(route as never);
      }}
    >
      <Text style={styles.primary_button_text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary_button: {
    backgroundColor: COLORS.purple,
    paddingVertical: 12,
    borderRadius: 36,
    marginTop: 28,
  },
  primary_button_text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
export default CButton;
