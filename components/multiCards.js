import { useRandomContext } from "@/context/randomRecipe";
import Card from "./card";
import styles from "./multiCards.module.scss";
import { useResultContext } from "@/context/resultArray";

export default function MultiCards() {
  const { resultArray } = useResultContext();
  const { randomRecipe } = useRandomContext();
  let cards;

  // if (resultArray[0] === "recipes") {
  //   cards = resultArray.recipes.map(({ title, image, id }) => (
  //     <Card title={title} image={image} key={id} />
  //   ));
  // } else
  if (resultArray.results) {
    cards = resultArray.results.map(({ title, image, id }) => (
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
      <h3 style={{ color: "#454545", marginLeft: "80px" }}>
        Showing random recipe:
      </h3>
      <section className={styles.cardGrid}>{cards ? cards : <Card />}</section>
    </>
  ); //layout setup for future forEach placement when we have multiple cards to generate (import Card functionality from component into a grid)
}
