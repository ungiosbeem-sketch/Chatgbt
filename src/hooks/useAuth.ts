import { useEffect } from "react";
import { supabase } from "../supabase/client";

export const useAuth = () => {
  useEffect(() => {
    supabase.auth.getSession();
  }, []);
};
