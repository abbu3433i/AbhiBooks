import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); //------context create kiya he authcotext naam se

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);