import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../constants";

const Input = (
  props: TextInput["props"] & { icon?: string; label?: string }
) => {
  const [isSecure, setIsSecure] = useState(props.secureTextEntry);

  return (
    <View>
      <Text style={styles.input_label}>{props.label}</Text>
      <View style={styles.input_wrapper}>
        <Entypo
          name={(props.icon ?? "mail") as any}
          size={22}
          color={COLORS.secondary}
        />

        <TextInput
          placeholderTextColor={COLORS.secondary}
          style={styles.input}
          {...props}
          secureTextEntry={isSecure}
        />

        {props.secureTextEntry && (
          <Pressable
            style={styles.input_eye}
            onPress={() => {
              setIsSecure(!isSecure);
            }}
          >
            <Entypo name={isSecure ? "eye-with-line" : "eye"} size={18} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
  },
  input_wrapper: {
    flexDirection: "row",
    borderColor: COLORS.secondary ,
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 36,
  },
  input_label: {
    fontSize: 22,
    marginBottom: 6,
    fontWeight: "500",
  },
  input_eye: {
    position: "absolute",
    right: 16,
  },
});

export default Input;
