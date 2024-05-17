import React from "react";
import { AuthProvider } from "@/providers/AuthProvider";
import MainNavigation from "@/navigation/MainNavigation";

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  );
}

export default App;
