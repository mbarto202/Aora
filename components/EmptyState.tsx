import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
        backgroundColor: "#000",
      }}
    >
      <Image
        source={images.empty}
        style={{ height: 215, width: 270 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontFamily: "Poppins-SemiBold",
          color: "#ffffff",
          marginTop: 8,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 14,
          color: "#f3f4f6",
        }}
      >
        {subtitle}
      </Text>
      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles={{ width: "100%", marginVertical: 20 }}
      />
    </View>
  );
};

export default EmptyState;
