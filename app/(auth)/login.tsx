import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { loginSchema } from "../../src/utils/authValidation";

import { signInWithEmail } from "../../src/supabase/auth";

import { router } from "expo-router";

export default function Login() {
  const {
    handleSubmit,
    register,
    setValue,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (
    data: any
  ) => {
    const { error } =
      await signInWithEmail(
        data.email,
        data.password
      );

    if (error) {
      Alert.alert(error.message);
      return;
    }

    router.replace(
      "/(tabs)/chats"
    );
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
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Login
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
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.push(
            "/(auth)/register"
          )
        }
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
