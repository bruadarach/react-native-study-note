import { View, Alert, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert1" onPress={() => Alert.alert("Message")} />

      <Button title="Alert2" onPress={() => Alert.alert("Title", "Message")} />

      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("Yes pressed") },
            { text: "No", onPress: () => console.log("No pressed") },
          ])
        }
      />
    </View>
  );
}
