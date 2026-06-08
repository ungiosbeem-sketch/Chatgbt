import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function Onboarding() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Welcome To
      </Text>

      <Text
        style={{
          fontSize: 36,
          color: "#3366FF",
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Abdalla Keynan
      </Text>

      <TouchableOpacity
        onPress={() =>
          router.push("/(auth)/login")
        }
        style={{
          backgroundColor: "#3366FF",
          padding: 16,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
