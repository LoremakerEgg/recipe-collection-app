import styles from "./recipe.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";
import { useShowRecipeContext } from "@/context/showRecipe";
import { useInstructionContext } from "@/context/showInstructions";
import { useRecipeIngredientContext } from "@/context/recipeIngredient";

export default function Recipe() {
  const { showFullRecipe, setShowFullRecipe } = useShowFullRecipeContext();
  const { resultArray } = useResultContext();
  const { showRecipe, setShowRecipe } = useShowRecipeContext();
  const { instructions } = useInstructionContext();
  const { recipeIngredients } = useRecipeIngredientContext();

  const specificCard = resultArray.filter((element) => {
    return element.id == showRecipe;
  });

  const specificInstructions = instructions.filter((element) => {
    return element.recipeId == showRecipe;
  });

  const specificIngredients = recipeIngredients.filter((element) => {
    return element.recipeId == showRecipe;
  });

  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
  };
  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
  };
  const handleResultsClick = () => {
    setShowFullRecipe(false);
    setShowRecipe("");
  };

  //to remove certain words from instruction:
  const string = specificInstructions[0].instructions;
  const words = [
    "<ol>",
    "<li>",
    "<span>",
    "</span>",
    "</li>",
    "</ol>",
    "<p>",
    "</p>",
  ];
  const removeWords = (str, arr) => {
    return arr.reduce((acc, val) => {
      const regex = new RegExp(`${val}`, "g");
      return acc.replace(regex, "");
    }, str);
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
          <p>{removeWords(string, words)}</p>
        </div>
      </div>
      <div className={styles.ingredientsDiv}>
        <h3>Ingredients: </h3>
        <ul>
          {specificIngredients.map((element, id) => (
            <li key={id}>
              {element.amountString}
              {element.amountInt} {element.ingredient}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
