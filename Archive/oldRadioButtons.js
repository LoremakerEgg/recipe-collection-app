<form className={styles.showNForm}>
  <input
    className={styles.showNRadio}
    onClick={handleShow3}
    type="radio"
    id="show3"
    name="show"
  />
  <label className={styles.showNText} htmlFor="show3">
    Show 3
  </label>
  <input
    className={styles.showNRadio}
    onClick={handleShow5}
    type="radio"
    id="show5"
    name="show"
  />
  <label className={styles.showNText} htmlFor="show5">
    Show 5
  </label>
  <input
    className={styles.showNRadio}
    onClick={handleShow10}
    type="radio"
    id="show10"
    name="show"
  />
  <label className={styles.showNText} htmlFor="show10">
    Show 10
  </label>
</form>;
