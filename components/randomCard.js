import { createContext, useContext } from "react";
import styles from "./card.module.scss";
import { useRandomContext } from "@/context/randomRecipe";

export const MenuContext = createContext();

export default function Card() {
  const { randomRecipe } = useRandomContext();
  const { setShowRecipe } = useContext(MenuContext);
  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
  };
  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
  };
  const handleCardClick = (event) => {
    if (event.target.name != "addGroup") {
      setShowRecipe(true);
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img
        className={styles.cardImage}
        src={randomRecipe.image}
        alt="A random recipe"
      />
      <div className={styles.innerCard}>
        <p>{randomRecipe.title}</p>
        <p>Cooking time: {randomRecipe.readyInMinutes} minutes</p>
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