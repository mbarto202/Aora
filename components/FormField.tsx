import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  styles?: StyleProp<ViewStyle>;
  keyboardType?: "default" | "email-address";
};

const FormField: React.FC<FormFieldProps> = ({ title }) => {
  return (
    <View style={{ marginTop: 24, marginBottom: 8 }}>
      <Text
        style={{
          fontSize: 16,
          color: "#f3f4f6",
          fontFamily: "Poppins-Medium",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: "100%",
          height: 64,
          paddingHorizontal: 16,
          backgroundColor: "#161622",
          borderRadius: 16,
          borderWidth: 2,
          borderColor: "#232533",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
        }}
      ></View>
    </View>
  );
};

export default FormField;
