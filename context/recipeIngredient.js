import { createContext, useContext, useState } from "react";

const RecipeIngredientContext = createContext();

export function RecipeIngredientWrapper({ children }) {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  return (
    <RecipeIngredientContext.Provider
      value={{ recipeIngredients, setRecipeIngredients }}
    >
      {children}
    </RecipeIngredientContext.Provider>
  );
}

export function useRecipeIngredientContext() {
  return useContext(RecipeIngredientContext);
}
