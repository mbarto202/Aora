import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: "#FFA001",
          borderRadius: 12,
          minHeight: 62,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        containerStyles,
        isLoading ? styles.loading : null,
      ]}
      disabled={isLoading}
    >
      <Text
        style={[
          {
            color: "#000000",
            fontFamily: "Poppins-SemiBold",
            fontSize: 18,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loading: {
    opacity: 0.5,
  },
});

export default CustomButton;
