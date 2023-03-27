import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <a className={styles.link} href="./">
          <h2>Home</h2>
        </a>
        <h2>Group</h2>
        <h2>Shopping List</h2>
        <a className={styles.link} href="./about">
          <h2>About Us</h2>
        </a>
      </header>
    </>
  );
}
