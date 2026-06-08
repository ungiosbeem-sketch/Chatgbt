import { useEffect } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  ActivityIndicator,
} from "react-native";

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/onboarding");
    }, 2500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3366FF",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#fff",
          fontWeight: "700",
        }}
      >
        Abdalla Keynan
      </Text>

      <ActivityIndicator
        size="large"
        color="#fff"
      />
    </View>
  );
}
