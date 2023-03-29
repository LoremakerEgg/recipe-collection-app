import styles from "./navbar.module.scss";
import { useRouter } from "next/router";

const NavbarLarge = () => {
  //För att få aktiva Länkar.
  let aboutActive = false;
  let homeActive = false;
  const router = useRouter();
  if (router.pathname == "/about") {
    aboutActive = true;
  } else if (router.pathname == "/") {
    homeActive = true;
  }

  return (
    <>
      <header className={styles.navbar}>
        <a className={homeActive ? styles.linkActive : styles.link} href="./">
          <h2>Home</h2>
        </a>
        <h2>Group</h2>
        <h2>Shopping List</h2>
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
