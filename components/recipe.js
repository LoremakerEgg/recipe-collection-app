import styles from "./recipe.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";
import { useShowRecipeContext } from "@/context/showRecipe";
import { useInstructionContext } from "@/context/showInstructions";

export default function Recipe() {
  const { showFullRecipe, setShowFullRecipe } = useShowFullRecipeContext();
  const { resultArray } = useResultContext();
  const { showRecipe, setShowRecipe } = useShowRecipeContext();
  const { instructions } = useInstructionContext();

  const specificCard = resultArray.filter((element) => {
    return element.id == showRecipe;
  });

  const specificInstructions = instructions.filter((element) => {
    return element.recipeId == showRecipe;
  });

  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
    console.log(resultArray);
    console.log(instructions);
    console.log(showRecipe);
  };
  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
    console.log(resultArray);
  };
  const handleResultsClick = () => {
    setShowFullRecipe(false);
    setShowRecipe("");
  };
  return (
    <section className={styles.recipeSection}>
      <div className={styles.recipeDiv}>
        <h3>
          {specificCard[0]
            ? specificCard[0].recipeTitle
            : resultArray[0].recipeTitle}
        </h3>
        <div className={styles.recipeChild}>
          <img
            src={
              specificCard[0]
                ? specificCard[0].recipeImageURL
                : resultArray[0].recipeImageURL
            }
          />
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
          <p>{specificInstructions[0].instructions}</p>
        </div>
      </div>
      <div className={styles.ingredientsDiv}>
        <h3>Ingredients: </h3>
        <ul>TBA</ul>
      </div>
    </section>
  );
}
