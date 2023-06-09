import styles from "./searchFilter.module.scss";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useNRecipesContext } from "@/context/showNRecipes";
import { useIngredientContext } from "@/context/ingredient";
import { useResultContext } from "@/context/resultArray";
import { useIncludeContext } from "@/context/include";
import { useAllRecipeContext } from "@/context/allRecipesArray";

export default function SearchFilter() {
  const { allRecipes, setAllRecipes } = useAllRecipeContext();
  const { resultArray, setResultArray } = useResultContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  const { ingredient, setIngredient } = useIngredientContext();
  const { include, setInclude } = useIncludeContext();

  const fetchAllRecipes = async () => {
    fetch(`http://localhost:3000/api/fetchAllRecipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllRecipes(data);
      });
  };

  const fetchRecipeRandom = async () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    fetch(`http://localhost:3000/api/fetchAllRecipes`)
      .then((res) => res.json())
      .then((data) => {
        const tempArray = [];
        tempArray.push(data[randomNumber]);
        setResultArray(tempArray);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Local fetch completed.");
      });
  };

  const fetchRecipeTime = () => {
    fetch("http://localhost:3000/api/fetchTimelimit")
      .then((res) => res.json())
      .then((data) => {
        setResultArray(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Local fetch completed.");
      });
  };

  const fetchRecipeInclude = async () => {
    await fetch(`http://localhost:3000/api/fetchIngredients`)
      .then((res) => res.json())
      .then((data) => {
        const ingArray = data.filter((ing) => {
          return ing.ingredientId == ingredient;
        });
        const tempArray = ingArray.map((item) => {
          return item.recipeId;
        });
        const filter = allRecipes.filter((element) => {
          return tempArray.includes(element.id);
        });
        setResultArray(filter);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Local fetch completed.");
      });
  };

  const handleRandomClick = (e) => {
    e.preventDefault();
    setShowNRec(1);
    fetchRecipeRandom();
  };

  const handleShow3 = () => {
    setShowNRec(3);
  };

  const handleShow6 = () => {
    setShowNRec(6);
  };

  const handleShow9 = () => {
    setShowNRec(9);
  };

  const handleInclude = (e) => {
    e.preventDefault();
    fetchAllRecipes();
    setInclude(1);
    fetchRecipeInclude();
  };

  // const handleExclude = (e) => {
  // e.preventDefault();
  // setInclude(2);
  // };

  const handleIngredient = (e) => {
    setIngredient(e.target.value);
  };

  const handleIngredientReset = (e) => {
    e.preventDefault();
    setInclude(0);
    setIngredient(0);
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    fetchRecipeTime();
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headerLarge}>
        Unleash Your Inner Chef and Explore New Flavors!
      </h1>
      <div className={styles.choiceWrapper}>
        <h2 className={styles.headerMedium}>Show me:</h2>
        <div className={styles.filterContainer}>
          <div className={styles.leftContainer}>
            <form className={styles.randomForm}>
              <fieldset className={styles.randomField}>
                <legend className={styles.legend}>Random Recipe</legend>
                <button
                  className={styles.randomButton}
                  onClick={handleRandomClick}
                >
                  Get Recipe
                </button>
              </fieldset>
            </form>
            <form className={styles.timeForm}>
              <fieldset className={styles.timeField}>
                <legend className={styles.legend}>
                  Recipes by Cooking Time
                </legend>
                <input
                  className={styles.timeButton}
                  type="submit"
                  value="30min or Less"
                  name="quick"
                  onClick={handleQuickSubmit}
                />
              </fieldset>
            </form>
          </div>
          <form className={styles.inclusionForm}>
            <fieldset className={styles.inclusionField}>
              <legend className={styles.legend}>Recipes by Ingredients</legend>
              <div className={styles.inclusionChoiceContainer}>
                <div className={styles.ingredientContainer}>
                  {/* TODO ingredient value as state */}
                  <select
                    className={styles.ingredientSelect}
                    onChange={handleIngredient}
                    id="ingredient"
                    name="ingredient"
                  >
                    <option className={styles.ingredientSelectOption}>
                      Ingredient
                    </option>
                    <option
                      className={styles.ingredientSelectOption}
                      value="11821"
                    >
                      Red bell pepper
                    </option>
                    <option
                      className={styles.ingredientSelectOption}
                      value="11215"
                    >
                      Garlic
                    </option>
                    <option
                      className={styles.ingredientSelectOption}
                      value="2012"
                    >
                      Cilantro
                    </option>
                  </select>
                </div>
                <div className={styles.inclusionChoice}>
                  <div className={styles.includeButtonWrapper}>
                    <input
                      className={styles.includeButton}
                      type="submit"
                      value="Include"
                      name="include"
                      onClick={handleInclude}
                    />
                    {/* <input
                      className={styles.includeButton}
                      type="submit"
                      value="Exclude"
                      name="exclude"
                      onClick={handleExclude}
                    /> */}
                  </div>
                  <input
                    className={styles.resetButton}
                    type="submit"
                    value="Reset"
                    name="reset"
                    onClick={handleIngredientReset}
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              onClick={handleShow3}
              value="3"
              control={<Radio style={{ color: "rgb(121, 205, 55)" }} />}
              label="Show 3"
              labelPlacement="top"
            />
            <FormControlLabel
              onClick={handleShow6}
              value="6"
              control={<Radio style={{ color: "rgb(121, 205, 55)" }} />}
              label="Show 6"
              labelPlacement="top"
            />
            <FormControlLabel
              onClick={handleShow9}
              value="9"
              control={<Radio style={{ color: "rgb(121, 205, 55)" }} />}
              label="Show 9"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
