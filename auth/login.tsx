import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import Input from "../components/input";
import Title from "../components/title";
import CButton from "../components/button";
import BottomLink from "../components/bottom-link";
import SocialLogin from "../components/social-login";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 32, flex: 1 }}>
        <Title
          title="Log In"
          description=" Hi! Welcome back, you' ve been missed"
        />

        <View style={{ rowGap: 16 }}>
          <Input placeholder="Enter your email" label="Email" />
          <Input
            icon="lock"
            placeholder="Enter password"
            secureTextEntry={true}
            label="Password"
          />
        </View>

        <Text
          style={{
            color: COLORS.secondary,
            textAlign: "right",
            textDecorationLine: "underline",
            marginVertical: 24,
            fontWeight: "bold",
          }}
        >
          Forgot Password?
        </Text>

        <CButton label="Log In" />
        <SocialLogin />
      </View>

      <BottomLink
        preText="Don't have an account?"
        postText="SignUp"
        route="signup"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
