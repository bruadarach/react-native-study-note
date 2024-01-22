import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        {/* borderRadius is only applicable to a Text in Android, not iOS */}
        {/* however, if you apply borderRadius to a View, it will be applied to both iOS and Android */}
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          Lightblue box
        </Text>
      </View>
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
    pink: "red",
  },
  box: {
    // width: 100,
    // height: 100,
    // padding: 10,
    // dimentios of

    // in react native all dimensions are unitless and represent dp(density-independent pixel)
    // specific units like Rems and pixels are required.
    width: "25%",
    height: "25%",
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
});
