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

  if (randomRecipe) {
    return (
      <div className={styles.card} onClick={handleCardClick}>
        <img className={styles.cardImage} src={randomRecipe.image} alt="Food" />
        <div className={styles.innerCard}>
          <p>BURGER</p>
          <p>1 h</p>
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
  } else {
    return <div></div>;
  }
}
