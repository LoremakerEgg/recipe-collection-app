import { createContext, useContext } from "react";
import styles from "./card.module.scss";
import { useResultContext } from "@/context/resultArray";
import { useShowFullRecipeContext } from "@/context/showFullRecipe";

export default function Card(props) {
  const { setShowFullRecipe } = useShowFullRecipeContext();
  const { resultArray } = useResultContext();
  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
  };
  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
  };
  const handleCardClick = (event) => {
    if (event.target.name != "addGroup") {
      setShowFullRecipe(true);
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
