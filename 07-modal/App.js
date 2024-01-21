import { useState } from "react";
import { View, Button, Modal, Text } from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
      }}
    >
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="lightblue"
      />
      <Modal
        visible={isModalVisible}
        // onRequestClose is required for Android devices when users press the back button on Android devices.
        onRequestClose={() => setIsModalVisible(false)}
        // animationType="slide" or "fade" or "none"
        animationType="slide"
        // presentationStyle is only for iOS devices, not for Android devices.
        // presentationStyle="fullScreen" or "pageSheet" or "formSheet" or "overFullScreen"
        // formSheet is narrow, while pageSheet is wider.
        /// formSheet is for iPads, not for iPhones.
        presentationStyle="pageSheet"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 60,
          }}
        >
          <Text>Modal</Text>
          <Button
            title="Close"
            color={"lightpink"}
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
