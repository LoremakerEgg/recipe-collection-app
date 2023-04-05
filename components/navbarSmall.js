import styles from "./navbar.module.scss";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const NavbarSmall = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdown = useRef(null);

  //För att toggla dropdownmenu när vi klickar på hamburger Menu.
  const handleonClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  //För att stänga dropdownmenu när den är öppen & vi klickar utanför den.
  useEffect(() => {
    if (!dropdownVisible) return;

    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    const timeoutId = setTimeout(() => {
      window.addEventListener("click", handleClick);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("click", handleClick);
    };
  }, [dropdownVisible]);

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
        <img
          className={styles.hamburgerMenu}
          src="/HamburgerMenu.svg"
          alt="hamburger menu"
          width="69px"
          height="69px"
          onClick={handleonClick}
        />
        <img
          className={styles.gurka}
          src="/gurka1.svg"
          alt="cucumber logo"
          width="59.5px"
          height="59.5px"
        />
      </header>
      <div
        className={styles.dropdown}
        style={{ display: dropdownVisible ? "block" : "none" }}
        ref={dropdown}
      >
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
      </div>
    </>
  );
};

export default NavbarSmall;
