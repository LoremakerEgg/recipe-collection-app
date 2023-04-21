import Card from "./card";
import { useResultContext } from "@/context/resultArray";
import { useNRecipesContext } from "@/context/showNRecipes";
import styles from "./resultsPageTwo.module.scss";
import { useEffect } from "react";

export default function ResultsPageTwo() {
  const { resultArray } = useResultContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  let cards;

  if (resultArray.length === 1) {
    cards = (
      <Card
        title={resultArray[0].recipeTitle}
        image={resultArray[0].recipeImageURL}
        key={resultArray[0].id}
        time={resultArray[0].cookingTime}
        id={resultArray[0].id}
      />
    );
  } else {
    cards = resultArray
      .slice(showNRec, showNRec + showNRec)
      .map(({ recipeTitle, recipeImageURL, id, cookingTime }) => (
        <Card
          title={recipeTitle}
          image={recipeImageURL}
          key={id}
          time={cookingTime}
          id={id}
        />
      ));
  }

  return (
    <>
      <h3 style={{ color: "#454545", marginLeft: "80px" }}>Results:</h3>
      <section className={styles.cardGrid}>{cards ? cards : <Card />}</section>
    </>
  );
}
