import { createContext, useContext } from "react";
import styles from "./card.module.scss";
import { useResultContext } from "@/context/resultArray";

export const MenuContext = createContext();

export default function Card() {
  const { setShowRecipe } = useContext(MenuContext); // Are we using this now?
  const { resultArray } = useResultContext();
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

  // If (!resultArray) {
  //     return (
  //     <div className={styles.card} onClick={handleCardClick}>
  //         <img className={styles.cardImage} src= "./public/eggs-benedict-burger.jpg" alt="Food" />
  //         <div className={styles.innerCard}>
  //         <p>BURGER</p>
  //         <p>1 h</p>
  //         <button
  //             className={styles.cardButton}
  //             onClick={handleGroupClick}
  //             name="addGroup"
  //         >
  //             Add to Group
  //         </button>
  //         <button
  //             className={styles.cardButton}
  //             onClick={handleShoppingClick}
  //             name="addGroup"
  //         >
  //             Shopping List
  //         </button>
  //         </div>
  //     </div>
  //     )
  // } else {
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img
        className={styles.cardImage}
        src={
          resultArray.image
            ? resultArray.image
            : "./public/eggs-benedict-burger.jpg"
        }
        alt="Serving suggestion for recipe"
      />
      <div className={styles.innerCard}>
        <p>{resultArray.title ? resultArray.title : "Recipe"}</p>
        <p>
          {resultArray.readyInMinutes
            ? `Cooking time: ${resultArray.readyInMinutes} minutes`
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
