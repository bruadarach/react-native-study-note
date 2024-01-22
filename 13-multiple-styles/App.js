import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* how to use multiple styles - [styles.box, styles.lightblueBg] */}
      {/* the last style in the array will override the previous style */}

      {/* <View style={styles.lightblueBox}> */}
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Lightblue box</Text>
      </View>
      {/* <View style={styles.lightGreenBox}> */}
      <View style={[styles.box, styles.lightGreenBg]}>
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
    pink: "red", // the last style in the array will override the previous style
  },
  // lightblueBox: {
  //   backgroundColor: "lightblue",
  //   width: 100,
  //   height: 100,
  //   padding: 10,
  // },
  // lightGreenBox: {
  //   backgroundColor: "lightgreen",
  //   width: 100,
  //   height: 100,
  //   padding: 10,
  // },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue", // the last style in the array override the previous style
  },
  lightGreenBg: {
    backgroundColor: "lightgreen", // the last style in the array will override the previous style
  },
});
