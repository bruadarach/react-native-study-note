import { View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* StatusBar component - backgroundColor prop is specific to Android */}
      {/* can't change the background color of the status bar on iOS */}

      {/* can only change the text color on both platforms */}
      {/* barStyle="default" corresponds to the dark text on iOS and light text on Android */}
      {/* barStyle="dark-content" corresponds to the dark text on both platforms */}
      {/* barStyle="light-content" corresponds to the light text on both platforms */}

      {/* hidden prop is to hide the status bar */}
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden />
    </View>
  );
}
