import React, { createContext, useContext, useState } from "react";

interface HeaderContextData {
  setHeader: Function;
  header: string;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({ children }) => {
  const [header, setHeader] = useState<string>("");

  return (
    <HeaderContext.Provider
      value={{
        setHeader,
        header,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export function useHeader(): HeaderContextData {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
