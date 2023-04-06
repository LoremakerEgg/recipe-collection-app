import { createContext, useContext, useState } from "react";

const ShowRecipeContext = createContext();

export function RecipeWrapper({ children }) {
  const [showRecipe, setShowRecipe] = useState("");

  return (
    <ShowRecipeContext.Provider value={{ showRecipe, setShowRecipe }}>
      {children}
    </ShowRecipeContext.Provider>
  );
}

export function useShowRecipeContext() {
  return useContext(ShowRecipeContext);
}
