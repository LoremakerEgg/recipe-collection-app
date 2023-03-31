// import styles from "./searchFilter.module.scss";
import { useState, useEffect, useContext, createContext } from "react";
import { useRandomContext } from "@/context/randomRecipe";
import { useNRecipesContext } from "@/context/showNRecipes";
import { useIncludeContext } from "@/context/include";
import { useIngredientContext } from "@/context/ingredient";
import { useResultContext } from "@/context/resultArray";

export default function SearchFilter() {
  const { randomRecipe, setRandomRecipe } = useRandomContext();
  const { quickRecipe, setQuickRecipe } = useState();
  const { show, setShow } = useState();
  const { include, setInclude } = useState();

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
    setShow(3);
  };
  const handleShow5 = () => {
    setShow(5);
  };
  const handleShow10 = () => {
    setShow(10);
  };
  const handleInclude = () => {
    setInclude(true);
  };
  const handleExclude = () => {
    setInclude(false);
  };

  const HandleOnCheck = () => {
    setQuickRecipe((prev) => !prev);
  };

  return (
    <div>
      <h1>Find Recipes</h1>
      <h2>Show me:</h2>
      <div className="filterContainer">
        <form className="searchForm">
          <fieldset>
            <button onClick={handleRandomClick}>Random Recipe</button>
          </fieldset>
          <fieldset>
            <input
              onClick={handleInclude}
              type="radio"
              id="include"
              name="includeExclude"
            />
            <label htmlFor="include">Include:</label>
            <input
              onClick={handleExclude}
              type="radio"
              id="exclude"
              name="includeExclude"
            />
            <label htmlFor="exclude">Exclude:</label>
            {/* TODO ingredient value as state */}
            <select id="ingredient" name="ingredient">
              <option>Ingredient</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
              <option value="cilantro">Cilantro</option>
            </select>
          </fieldset>
        </form>
        <form className="filterForm">
          <input onClick={handleShow3} type="radio" id="show3" name="show" />
          <label htmlFor="show3">Show 3 recipes</label>
          <input onClick={handleShow5} type="radio" id="show5" name="show" />
          <label htmlFor="show5">Show 5 recipes</label>
          <input
            onClick={handleShow10}
            type="radio"
            id="show10"
            name="show"
          />{" "}
          <label htmlFor="show10">Show 10 recipes</label>
        </form>
        <form className="timeForm">
          <input
            type="checkbox"
            id="quickRecipes"
            name="quickRecipes"
            onClick={HandleOnCheck}
          />
          <label htmlFor="quickRecipes"> Less than 30 min prep time</label>
        </form>
      </div>
    </div>
  );
}
