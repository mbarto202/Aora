import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";

const SignIn = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <ScrollView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            height: "100%",
            paddingHorizontal: 16,
            marginVertical: 24,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              width: 115,
              height: 34,
            }}
          />
          <Text
            style={{
              fontSize: 24, // text-2xl
              fontWeight: "600", // font-semibold
              color: "#FFFFFF", // text-white
              marginTop: 40, // mt-10
              fontFamily: "Poppins-SemiBold", // font-psemibold
            }}
          >
            Log in to Aora
          </Text>
          <FormField />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
