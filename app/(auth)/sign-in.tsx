import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

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
              fontSize: 24,
              fontWeight: "600",
              color: "#FFFFFF",
              marginTop: 40,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setform({ ...form, email: e })}
            styles={{ marginTop: 7 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setform({ ...form, password: e })}
            styles={{ marginTop: 7 }}
            keyboardType="email-address"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
