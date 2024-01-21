import { View, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="red" />
      {/* animating={false} will hide the indicator */}
      <ActivityIndicator size="large" color="blue" animating={false} />
    </View>
  );
}
