import MultiCards from "@/components/multiCards";
import Recipe from "@/components/recipe";
import { useState } from "react";
import { MenuContext } from "@/components/card";
import Head from "next/head";

export default function Recipes() {
  const [showRecipe, setShowRecipe] = useState(false);
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipe page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MenuContext.Provider value={{ setShowRecipe }}>
        {showRecipe ? <Recipe /> : <MultiCards />}
      </MenuContext.Provider>
    </>
  );
}
