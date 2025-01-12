import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Image
            source={images.logo}
            style={{
              width: 130,
              height: 130,
            }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={{
              width: 343,
              height: 300,
            }}
            resizeMode="contain"
          />
          <View style={{ position: "relative", marginTop: 20 }}>
            <Text
              style={{
                fontSize: 30, // Corresponds to text-3xl
                color: "#ffffff", // Corresponds to text-white
                fontWeight: "bold", // Corresponds to font-bold
                textAlign: "center", // Corresponds to text-center
              }}
            >
              Discover Endless Possibilities with{" "}
              <Text style={{ color: "#FFA001" }}>Aora</Text>
            </Text>
            <Image
              source={images.path}
              style={{
                width: 136,
                height: 15,
                position: "absolute",
                bottom: -8,
                right: -32,
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: "#f3f4f6",
              marginTop: 28,
              textAlign: "center",
            }}
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            containerStyles={{ width: "100%", marginTop: 28 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  contentContainer: {
    height: "100%",
  },

  blackText: {
    fontSize: 24,
    fontFamily: "Poppins-Black",
  },

  link: {
    color: "blue",
    fontFamily: "Poppins-Regular",
  },
});
