import { useContext } from "react";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { AuthContext } from "@/providers/AuthProvider";

export const useAuth = (): FirebaseAuthTypes.User | null => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context.user;
};
