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

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    custom: {
      main: "#B6D0CC",
      contrastText: "#fff",
    },
  },
});

export default function SearchFilter() {
  const { resultArray, setResultArray } = useResultContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  const { ingredient, setIngredient } = useIngredientContext();

  const fetchRecipeRandom = () => {
    fetch("http://localhost:3000/api/fetchrandom")
      .then((res) => res.json())
      .then((data) => {
        setResultArray(data.recipes[0]);
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

  const fetchRecipeInclude = () => {
    fetch(`http://localhost:3000/api/fetchinclude?ingredient=${ingredient}`)
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

  const handleRandomClick = (e) => {
    e.preventDefault();
    console.log(resultArray);
    fetchRecipeRandom();
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

  const handleInclude = (e) => {
    e.preventDefault();
    fetchRecipeInclude();
    // setInclude(1)
    // console.log(resultArray);
  };

  // const handleExclude = (e) => {
  // e.preventDefault();
  //   setInclude(2);
  // };

  const handleIngredient = (e) => {
    setIngredient(e.target.value);
    console.log(ingredient);
  };

  const handleIngredientReset = (e) => {
    e.preventDefault();
    setInclude(0);
    setIngredient("");
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    fetchRecipeTime();
    console.log(resultArray);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headerLarge}>Find Recipes</h1>
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
                      value="chicken"
                    >
                      Chicken
                    </option>
                    <option
                      className={styles.ingredientSelectOption}
                      value="beef"
                    >
                      Beef
                    </option>
                    <option
                      className={styles.ingredientSelectOption}
                      value="cilantro"
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
        <ThemeProvider theme={theme}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onClick={handleShow3}
                value="3"
                control={<Radio color="custom" />}
                label="Show 3"
                labelPlacement="top"
              />
              <FormControlLabel
                onClick={handleShow5}
                value="5"
                control={<Radio />}
                label="Show 5"
                labelPlacement="top"
              />
              <FormControlLabel
                onClick={handleShow10}
                color="#B6D0CC"
                value="10"
                control={<Radio />}
                label="Show 10"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
}
