import React, { createContext, useContext, useEffect, useState } from "react";
import { getLsUserToken } from "../localStorage";

interface IUser {
  userId: string;
  name: string;
  email: string;
  type: string;
}

interface AuthContextData {
  user: IUser;
  verifyUserExists: () => Promise<void>;
  getPayload: () => IUser;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>({});

  function parseJwt(token: string) {
    const tokenOnly = token.split(" ")[1];
    var base64Url = tokenOnly.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const getPayload = () => {
    const token = getLsUserToken();
    if (!token) {
      return {};
    }

    return parseJwt(token);
  };

  const verifyUserExists = async () => {
    const user = getPayload();
    if (user.userId) {
      setUser(user);
    }
  };
  useEffect(() => {
    verifyUserExists();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        verifyUserExists: verifyUserExists,
        getPayload: getPayload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
