import { useEffect } from "react";
import Card from "./card";
import styles from "./multiCards.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useNRecipesContext } from "@/context/showNRecipes";

export default function MultiCards() {
  const { resultArray } = useResultContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  let cards;

  // if (resultArray[0] === "recipes") {
  //   cards = resultArray.recipes.map(({ title, image, id }) => (
  //     <Card title={title} image={image} key={id} />
  //   ));
  // } else

  useEffect(() => {
    setShowNRec(0);
  }, [Card]);

  if (resultArray.length === 1) {
    cards = (
      <Card
        title={resultArray[0].recipeTitle}
        image={resultArray[0].recipeImageURL}
        key={resultArray[0].id}
        time={resultArray[0].cookingTime}
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
        />
      ));
  }

  return (
    <>
      <h3 style={{ color: "#454545", marginLeft: "80px" }}>Showing results:</h3>
      <section className={styles.cardGrid}>{cards ? cards : <Card />}</section>
    </>
  );
}
