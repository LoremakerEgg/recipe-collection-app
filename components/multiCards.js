import Card from "./card";
import styles from "./multiCards.module.scss";

export default function MultiCards() {
  const fetchRandom = () => {
    fetch("http://localhost:3000/api/fetchtest")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <h3 style={{ color: "#454545", marginLeft: "80px" }}>
        Showing results for ´INPUT´:
      </h3>
      <button onClick={fetchRandom}>Fetch</button>
      <section className={styles.cardGrid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  ); //layout setup for future forEach placement when we have multiple cards to generate (import Card functionality from component into a grid)
}
