import MultiCards from "@/components/multiCards";
import Navbar from "@/components/navbar";
import Recipe from "@/components/recipe";
import { useState } from "react";
import { MenuContext } from "@/components/card";

export default function Recipes() {
  const [showRecipe, setShowRecipe] = useState(false);
  return (
    <>
      <Navbar />
      <MenuContext.Provider value={{ setShowRecipe }}>
        {showRecipe ? <Recipe /> : <MultiCards />}
      </MenuContext.Provider>
    </>
  );
}
