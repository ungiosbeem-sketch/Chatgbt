import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20
        }}
      >
        Login
      </Text>

      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          marginBottom: 12
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10
        }}
      />

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#3366FF",
          padding: 15,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center"
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
