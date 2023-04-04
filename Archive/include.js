import { createContext, useContext, useState } from "react";

const IncludeContext = createContext();

export function IncludeWrapper({ children }) {
  const [include, setInclude] = useState();
  return (
    <IncludeContext.Provider value={{ include, setInclude }}>
      {children}
    </IncludeContext.Provider>
  );
}

export function useIncludeContext() {
  return useContext(IncludeContext);
}
