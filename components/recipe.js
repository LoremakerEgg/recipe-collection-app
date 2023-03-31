import styles from "./recipe.module.scss";
import { useRandomContext } from "@/context/randomRecipe";
import { useResultContext } from "@/context/resultArray";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";

export default function Recipe() {
  const { showFullRecipe, setShowFullRecipe } = useShowFullRecipeContext();
  const { randomRecipe } = useRandomContext();
  const { resultArray } = useResultContext();

  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
  };
  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
    console.log(resultArray);
  };
  const handleResultsClick = () => {
    setShowFullRecipe(false);
  };
  return (
    <section className={styles.recipeSection}>
      <div className={styles.recipeDiv}>
        <h3>{resultArray.recipes[0].title}</h3>
        <div className={styles.recipeChild}>
          <img src={resultArray.recipes[0].image} />
          <div className={styles.buttonDiv}>
            <button className={styles.cardButton} onClick={handleGroupClick}>
              Add to Group
            </button>
            <button className={styles.cardButton} onClick={handleShoppingClick}>
              Shopping List
            </button>
            <button className={styles.cardButton} onClick={handleResultsClick}>
              Back to Results
            </button>
          </div>
        </div>
        <div className={styles.menuDiv}>
          <h3>Recipe Instructions: </h3>
          <p>{resultArray.recipes[0].instructions}</p>
        </div>
      </div>
      <div className={styles.ingredientsDiv}>
        <h3>Ingredients: </h3>
        <ul>
          {resultArray.recipes[0].extendedIngredients.map(
            ({ originalName, amount, unit, id }) => (
              <li key={id}>
                {amount} {unit} {originalName}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
