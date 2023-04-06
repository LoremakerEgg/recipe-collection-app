import { createContext, useContext, useState } from "react";

const AllRecipeContext = createContext();

export function AllRecipeWrapper({ children }) {
  const [allRecipes, setAllRecipes] = useState([]);
  return (
    <AllRecipeContext.Provider value={{ allRecipes, setAllRecipes }}>
      {children}
    </AllRecipeContext.Provider>
  );
}

export function useAllRecipeContext() {
  return useContext(AllRecipeContext);
}
