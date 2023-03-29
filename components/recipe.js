import styles from "./recipe.module.scss";
import { MenuContext } from "./card";
import { useContext } from "react";

export default function Recipe() {
  const { setShowRecipe } = useContext(MenuContext);
  const handleGroupClick = () => {
    console.log("'Add Group' button has been clicked");
  };
  const handleShoppingClick = () => {
    console.log("'Shopping List' button has been clicked");
  };
  const handleResultsClick = () => {
    setShowRecipe(false);
  };
  return (
    <section className={styles.recipeSection}>
      <div className={styles.recipeDiv}>
        <div className={styles.recipeChild}>
          <img src="eggs-benedict-burger.jpg" />
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
          <h3>MENU ITEM: </h3>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li>XXXXXXXXX</li>
            <li>XXXXXXXXX</li>
          </ul>
        </div>
      </div>
      <div className={styles.ingredientsDiv}>
        <h3>INGREDIENTS: </h3>
        <ul>
          <li>XXXXXXXXX</li>
          <li>XXXXXXXXX</li>
          <li>XXXXXXXXX</li>
          <li>XXXXXXXXX</li>
          <li>XXXXXXXXX</li>
          <li>XXXXXXXXX</li>
        </ul>
      </div>
    </section>
  );
}
