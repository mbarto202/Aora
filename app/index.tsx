import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.blackText}>Aora</Text>
      <Link href="/profile" style={styles.link}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
