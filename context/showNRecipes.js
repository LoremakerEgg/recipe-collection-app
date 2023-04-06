import { createContext, useContext, useState } from "react";

const NRecipesContext = createContext();

export function NRecipesWrapper({ children }) {
  const [showNRec, setShowNRec] = useState(3);

  return (
    <NRecipesContext.Provider value={{ showNRec, setShowNRec }}>
      {children}
    </NRecipesContext.Provider>
  );
}

export function useNRecipesContext() {
  return useContext(NRecipesContext);
}
