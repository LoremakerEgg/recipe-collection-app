import { createContext, useContext, useState } from "react";

const ShowFullRecipeContext = createContext();

export function FullRecipekWrapper({ children }) {
  const [showFullRecipe, setShowFullRecipe] = useState(false);

  return (
    <ShowFullRecipeContext.Provider
      value={{ showFullRecipe, setShowFullRecipe }}
    >
      {children}
    </ShowFullRecipeContext.Provider>
  );
}

export function useShowFullRecipeContext() {
  return useContext(ShowFullRecipeContext);
}
