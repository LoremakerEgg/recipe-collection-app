import MultiCards from "@/components/multiCards";
import Recipe from "@/components/recipe";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";
import Head from "next/head";

export default function Recipes() {
  const { showFullRecipe, setShowFullRecipe } = useShowFullRecipeContext();
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipe page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {showFullRecipe ? <Recipe /> : <MultiCards />}
    </>
  );
}
