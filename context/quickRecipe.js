import { createContext, useContext, useState } from "react";

const QuickRecipeContext = createContext();

export function QuickWrapper({ children }) {
  const [quickRecipe, setQuickRecipe] = useState(false);

  return (
    <QuickRecipeContext.Provider value={{ quickRecipe, setQuickRecipe }}>
      {children}
    </QuickRecipeContext.Provider>
  );
}

export function useResultContext() {
  return useContext(QuickRecipeContext);
}
