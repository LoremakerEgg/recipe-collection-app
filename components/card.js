import styles from "./card.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";
import { useShowRecipeContext } from "@/context/showRecipe";
import { useInstructionContext } from "@/context/showInstructions";
import { useRecipeIngredientContext } from "@/context/recipeIngredient";

export default function Card(props) {
  const { setRecipeIngredients } = useRecipeIngredientContext();
  const { setShowFullRecipe } = useShowFullRecipeContext();
  const { resultArray } = useResultContext();
  const { setShowRecipe } = useShowRecipeContext();
  const { setInstructions } = useInstructionContext();

  const fetchInstructions = async () => {
    await fetch(`http://localhost:3000/api/fetchInstructions`)
      .then((res) => res.json())
      .then((data) => {
        setInstructions(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Local fetch completed.");
      });
  };

  const fetchIngredients = async () => {
    await fetch(`http://localhost:3000/api/fetchIngredients`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeIngredients(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Local fetch completed.");
      });
  };

  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
  };

  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
  };

  const handleCardClick = async (event) => {
    await fetchInstructions();
    await fetchIngredients();
    if (event.target.name != "addGroup") {
      setShowFullRecipe(true);
      setShowRecipe(event.target.id);
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick} id={props.id}>
      <img
        className={styles.cardImage}
        src={props.image ? props.image : "/eggs-benedict-burger.jpg"}
        alt="Serving suggestion for recipe"
      />
      <div className={styles.innerCard}>
        <p>{props.title ? props.title : "Recipe"}</p>
        <p>
          {props.time
            ? `Cooking time: ${props.time} minutes`
            : "No Cooking time available"}
        </p>
        <button
          className={styles.cardButton}
          onClick={handleGroupClick}
          name="addGroup"
        >
          Add to Group
        </button>
        <button
          className={styles.cardButton}
          onClick={handleShoppingClick}
          name="addGroup"
        >
          Shopping List
        </button>
      </div>
    </div>
  );
}
// }
