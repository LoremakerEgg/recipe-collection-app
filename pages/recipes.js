import Recipe from "@/components/recipe";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";
import Head from "next/head";
import ResultsPageOne from "@/components/resultsPageOne";
import ResultsPageTwo from "@/components/resultsPageTwo";
import { useState } from "react";

export default function Recipes() {
  const { showFullRecipe, setShowFullRecipe } = useShowFullRecipeContext();
  const [pageNumber, setPageNumber] = useState(1);

  function ResultPage() {
    if (pageNumber === 1) {
      console.log("Rendering 1");
      return <ResultsPageOne />;
    } else if (pageNumber === 2) {
      console.log("Rendering 2");
      return <ResultsPageTwo />;
    }
  }

  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipe page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {showFullRecipe ? <Recipe /> : <ResultPage />}
      <div>
        <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </>
  );
}
