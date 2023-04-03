import styles from "./navbar.module.scss";
import { useRouter } from "next/router";

const NavbarLarge = () => {
  //För att få aktiva Länkar.
  let aboutActive = false;
  let homeActive = false;
  let myRecipesActive = false;
  let shoppingListActive = false;
  const router = useRouter();
  if (router.pathname == "/about") {
    aboutActive = true;
  } else if (router.pathname == "/") {
    homeActive = true;
  } else if (router.pathname == "/MyRecipes") {
    myRecipesActive = true;
  } else if (router.pathname == "/shoppingList") {
    shoppingListActive = true;
  }

  return (
    <>
      <header className={styles.navbar}>
        <a className={homeActive ? styles.linkActive : styles.link} href="./">
          <h2>Home</h2>
        </a>
        <a
          className={myRecipesActive ? styles.linkActive : styles.link}
          href="./MyRecipes"
        >
          <h2>My Recipes</h2>
        </a>
        <a
          className={shoppingListActive ? styles.linkActive : styles.link}
          href="./shoppingList"
        >
          <h2>Shopping List</h2>
        </a>
        <a
          className={aboutActive ? styles.linkActive : styles.link}
          href="./about"
        >
          <h2>About Us</h2>
        </a>
      </header>
    </>
  );
};

export default NavbarLarge;
