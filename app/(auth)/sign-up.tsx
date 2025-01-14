import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    // Handle Sign In logic
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            paddingHorizontal: 16,
            marginVertical: 100,
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
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            keyboardType="default"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={{ marginTop: 24 }}
            isLoading={isSubmitting}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 20,
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#f3f4f6",
                fontFamily: "Poppins-Regular",
              }}
            >
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-SemiBold",
                color: "#FFA001",
              }}
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
