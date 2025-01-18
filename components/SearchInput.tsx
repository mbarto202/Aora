import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { icons } from "../constants";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  styles?: StyleProp<ViewStyle>;
  keyboardType?: "default" | "email-address";
};

const SearchInput: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  styles,
  keyboardType = "default",
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
        gap: 16,
      }}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        secureTextEntry={title === "Password" && !showPassword}
        style={{
          fontSize: 16,
          marginTop: 2,
          color: "#ffffff",
          flex: 1,
          fontFamily: "Poppins-Regular",
        }}
      />

      {title === "Password" && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={!showPassword ? icons.eye : icons.eyeHide}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
