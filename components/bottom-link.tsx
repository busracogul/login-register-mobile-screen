import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const BottomLink = ({
  preText,
  postText,
  route,
}: {
  preText: string;
  postText: string;
  route: string;
}) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: COLORS.secondary }}>
        {preText}
        <Text
          onPress={() => {
            navigation.navigate(route as never);
          }}
          style={{ color: COLORS.purple, textDecorationLine: "underline" }}
        >
          {" "}
          {postText}
        </Text>
      </Text>
    </View>
  );
};

export default BottomLink;
