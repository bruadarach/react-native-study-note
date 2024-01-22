import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          Lightblue box
        </Text>
      </View>
      <View
        style={[
          styles.box,
          styles.lightGreenBg,
          styles.boxShadow,
          styles.androidBoxShadow,
        ]}
      >
        <Text>Lightpink box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
    pink: "red",
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    // border: "2px solid black", // not working
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "yellow", // only works on both iOS and Android
    shadowOffset: { width: 10, height: 10 }, // not working on Android
    shadowOpacity: 0.5, // not working on Android
    shadowRadius: 5, // not working on Android
  },
  androidBoxShadow: {
    elevation: 50,
  },
});
