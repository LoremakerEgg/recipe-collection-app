// import styles from "./searchFilter.module.scss";
import { useState, useEffect } from "react";
import { useRandomContext } from "@/context/randomRecipe";
import { useNRecipesContext } from "@/context/showNRecipes";
import { useIncludeContext } from "@/context/include";
import { useIngredientContext } from "@/context/ingredient";
import { useResultContext } from "@/context/resultArray";
import { useQuickReipeContext } from "@/context/quickRecipe";
import styles from "./searchFilter.module.scss";

export default function SearchFilter() {
  const { randomRecipe, setRandomRecipe } = useRandomContext();
  const { quickRecipe, setQuickRecipe } = useQuickReipeContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  const { include, setInclude } = useIncludeContext();
  const { ingredient, setIngredient } = useIngredientContext();

  const fetchRandom = () => {
    fetch("http://localhost:3000/api/fetchrandom")
      .then((res) => res.json())
      .then((data) => {
        setRandomRecipe(data.recipes[0]);
      });
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  const handleRandomClick = (e) => {
    e.preventDefault();
    console.log(randomRecipe);
    fetchRandom();
  };
  const handleShow3 = () => {
    setShowNRec(3);
  };
  const handleShow5 = () => {
    setShowNRec(5);
  };
  const handleShow10 = () => {
    setShowNRec(10);
  };
  const handleInclude = () => {
    setInclude(1);
  };

  const handleExclude = () => {
    setInclude(2);
  };
  const handleIngredient = (e) => {
    setIngredient(e.target.value);
    console.log(ingredient);
  };

  const handleIngredientReset = () => {
    setInclude(0);
    setIngredient("");
  };

  const handleQuickSubmit = () => {
    setQuickRecipe((prev) => !prev);
  };

  return (
    <div classname={styles.mainContainer}>
      <h1>Find Recipes</h1>
      <h2>Show me:</h2>
      <div className={styles.filterContainer}>
        <form className="searchForm">
          <fieldset classname={styles.randomField}>
            <button classname={styles.filterButton} onClick={handleRandomClick}>
              Random Recipe
            </button>
          </fieldset>
          <fieldset classname={styles.inclusionField}>
            <div classname={styles.inclusionChoiceContainer}>
              <div classname={styles.ingredientContainer}>
                {/* TODO ingredient value as state */}
                <select
                  onChange={handleIngredient}
                  id="ingredient"
                  name="ingredient"
                >
                  <option>Ingredient</option>
                  <option value="chicken">Chicken</option>
                  <option value="beef">Beef</option>
                  <option value="cilantro">Cilantro</option>
                </select>
              </div>
              <div classname={styles.inclusionChoice}>
                <input
                  classname={styles.filterButton}
                  type="submit"
                  onSubmit={handleInclude}
                >
                  Include
                </input>
                <input
                  classname={styles.filterButton}
                  type="submit"
                  onSubmit={handleExclude}
                >
                  Exclude
                </input>
                <input
                  classname={styles.filterButton}
                  type="submit"
                  onSubmit={handleIngredientReset}
                >
                  Reset
                </input>
              </div>
            </div>
          </fieldset>
        </form>
        <form>
          <fieldset classname={styles.timeField}>
            <input
              classname={styles.filterButton}
              type="submit"
              onSubmit={handleQuickSubmit}
            >
              Quick recipes 30min or less
            </input>
          </fieldset>
          <form className={styles.showNForm}>
            <input onClick={handleShow3} type="radio" id="show3" name="show" />
            <label htmlFor="show3">Show 3 recipes</label>
            <input onClick={handleShow5} type="radio" id="show5" name="show" />
            <label htmlFor="show5">Show 5 recipes</label>
            <input
              onClick={handleShow10}
              type="radio"
              id="show10"
              name="show"
            />
            <label htmlFor="show10">Show 10 recipes</label>
          </form>
        </form>
      </div>
    </div>
  );
}
