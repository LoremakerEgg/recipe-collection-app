import { useEffect } from "react";
import Card from "./card";
import styles from "./resultsPageOne.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useNRecipesContext } from "@/context/showNRecipes";

export default function ResultsPageOne() {
  const { resultArray } = useResultContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  let cards;

  useEffect(() => {
    setShowNRec(3);
  }, [Card]);

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
      .slice(0, showNRec)
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
