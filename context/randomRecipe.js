import { createContext, useContext, useState } from "react";

const RandomContext = createContext();

export function RandomWrapper({ children }) {
  const [randomRecipe, setRandomRecipe] = useState([]);

  return (
    <RandomContext.Provider value={{ randomRecipe, setRandomRecipe }}>
      {children}
    </RandomContext.Provider>
  );
}

export function useRandomContext() {
  return useContext(RandomContext);
}
