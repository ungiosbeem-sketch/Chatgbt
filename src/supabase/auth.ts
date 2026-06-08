import { supabase } from "./client";

export const signUpWithEmail = async (
  email: string,
  password: string
) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const signInWithEmail = async (
  email: string,
  password: string
) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const sendOtp = async (
  phone: string
) => {
  return await supabase.auth.signInWithOtp({
    phone,
  });
};

export const verifyOtp = async (
  phone: string,
  token: string
) => {
  return await supabase.auth.verifyOtp({
    phone,
    token,
    type: "sms",
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};
