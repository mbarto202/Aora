import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabsLayout = () => {
  type TabIconProps = {
    icon: ImageSourcePropType;
    color: string;
    focused: boolean;
    name: string;
  };

  const TabIcon: React.FC<TabIconProps> = ({ icon, color, focused, name }) => {
    return (
      <View style={styles.iconContainer}>
        <Image
          source={icon}
          resizeMode="contain"
          style={[styles.icon, { tintColor: focused ? color : "white" }]}
        />
        <Text
          style={[
            styles.label,
            {
              color: focused ? color : "white",
              fontFamily: focused ? "Poppins-SemiBold" : "Poppins-Regular",
            },
          ]}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              name={"Home"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              name={"Bookmark"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              name={"Create"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              name={"Profile"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 63,
    height: 70,
    gap: 2,
    paddingTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    textAlign: "center",
  },
});

export default TabsLayout;
