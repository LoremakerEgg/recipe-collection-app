import { createContext, useContext, useState } from "react";

const NRecipesContext = createContext();

export function NRecipesWrapper({ children }) {
  const [show, setShow] = useState(0);

  return (
    <NRecipesContext.Provider value={{ show, setShow }}>
      {children}
    </NRecipesContext.Provider>
  );
}

export function useNRecipesContext() {
  return useContext(NRecipesContext);
}
