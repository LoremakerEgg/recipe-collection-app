import { createContext, useContext, useState } from "react";

const IngredientContext = createContext();

export function IngredientWrapper({ children }) {
  const [ingredient, setIngredient] = useState("");
  return (
    <IngredientContext.Provider value={{ ingredient, setIngredient }}>
      {children}
    </IngredientContext.Provider>
  );
}

export function useIngredientContext() {
  return useContext(IngredientContext);
}
