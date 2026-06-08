import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function OTP() {
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
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        OTP Verification
      </Text>

      <TextInput
        placeholder="Enter OTP"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 15,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#3366FF",
          padding: 15,
          borderRadius: 12,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
}
