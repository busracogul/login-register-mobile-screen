import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import Input from "../components/input";
import Title from "../components/title";
import CButton from "../components/button";
import BottomLink from "../components/bottom-link";
import SocialLogin from "../components/social-login";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SignupScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 32, flex: 1 }}>
        <Title
          title="Sign Up"
          description="Fill your information below or register with your social account"
        />

        <View style={{ rowGap: 16 }}>
          <Input icon="user" placeholder="Enter your name" label="Username" />
          <Input placeholder="Enter your email" label="Email" />
          <Input
            icon="lock"
            placeholder="Enter password"
            secureTextEntry={true}
            label="Password"
          />
          <Input
            icon="lock"
            placeholder="Confirm password"
            secureTextEntry={true}
            label="Confirm Password"
          />
        </View>
        <CButton label="Sign Up" />
        <SocialLogin />
      </View>

      <BottomLink
        preText="Don't have an account?"
        postText="Login"
        route="login"
      />
    </SafeAreaView>
  );
};

export default SignupScreen;
