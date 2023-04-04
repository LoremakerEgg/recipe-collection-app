import { useRandomContext } from "@/Archive/randomRecipe";
import Card from "./card";
import styles from "./multiCards.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useNRecipesContext } from "@/context/showNRecipes";

export default function MultiCards() {
  const { resultArray } = useResultContext();
  const { randomRecipe } = useRandomContext();
  const { showNRec } = useNRecipesContext();
  let cards;

  // if (resultArray[0] === "recipes") {
  //   cards = resultArray.recipes.map(({ title, image, id }) => (
  //     <Card title={title} image={image} key={id} />
  //   ));
  // } else
  if (resultArray.results) {
    cards = resultArray.results
      .slice(0, showNRec)
      .map(({ title, image, id }) => (
        <Card title={title} image={image} key={id} />
      ));
  } else if (resultArray.instructions) {
    cards = (
      <Card
        title={resultArray.title}
        image={resultArray.image}
        key={resultArray.id}
      />
    );
  }

  return (
    <>
      <h3 style={{ color: "#454545", marginLeft: "80px" }}>Showing results:</h3>
      <section className={styles.cardGrid}>{cards ? cards : <Card />}</section>
    </>
  );
}
