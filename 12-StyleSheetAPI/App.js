import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    // inline styles
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* StyleSheet API */}
      <Text style={styles.text}>StyleSheet API</Text>
    </View>
  );
}

// styles is only available in this file
// however, if you export it, it will be available in other files
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },

  text: {
    fontSize: 30,
    color: "white",
  },
});
