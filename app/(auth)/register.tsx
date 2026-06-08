import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useForm } from "react-hook-form";

import { signUpWithEmail } from "../../src/supabase/auth";

import { router } from "expo-router";

export default function Register() {
  const {
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = async (
    data: any
  ) => {
    const { error } =
      await signUpWithEmail(
        data.email,
        data.password
      );

    if (error) {
      Alert.alert(error.message);
      return;
    }

    router.push("/(auth)/otp");
  };

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
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        Create Account
      </Text>

      <TextInput
        placeholder="Email"
        onChangeText={(v) =>
          setValue("email", v)
        }
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 15,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(v) =>
          setValue("password", v)
        }
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 15,
        }}
      />

      <TouchableOpacity
        onPress={handleSubmit(
          onSubmit
        )}
        style={{
          marginTop: 20,
          backgroundColor: "#3366FF",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
