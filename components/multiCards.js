import Card from "./card";
import styles from "./multiCards.module.scss";

export default function MultiCards() {
  return (
    <>
      <h3 style={{ color: "#454545", marginLeft: "80px" }}>
        Showing random recipe:
      </h3>
      <section className={styles.cardGrid}>
        <Card />
      </section>
    </>
  ); //layout setup for future forEach placement when we have multiple cards to generate (import Card functionality from component into a grid)
}
