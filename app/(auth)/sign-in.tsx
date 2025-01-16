import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      router.replace("/home");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message); // Access error.message safely
      } else {
        Alert.alert("Error", "An unexpected error occurred"); // Fallback message
      }
    } finally {
      setIsSubmitting(false);
    }
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
            Log in to Aora
          </Text>

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
            title="Sign In"
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
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-SemiBold",
                color: "#FFA001",
              }}
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
