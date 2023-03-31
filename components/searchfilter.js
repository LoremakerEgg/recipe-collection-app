import styles from "./searchFilter.module.scss";
import { useState, useEffect } from "react";
import { useRandomContext } from "@/context/randomRecipe";
import { useNRecipesContext } from "@/context/showNRecipes";
import { useIncludeContext } from "@/context/include";
import { useIngredientContext } from "@/context/ingredient";
import { useResultContext } from "@/context/resultArray";
import { useQuickReipeContext } from "@/context/quickRecipe";

export default function SearchFilter() {
  const { resultArray, setResultArray } = useResultContext();
  const { randomRecipe, setRandomRecipe } = useRandomContext();
  const { quickRecipe, setQuickRecipe } = useQuickReipeContext();
  const { showNRec, setShowNRec } = useNRecipesContext();
  const { include, setInclude } = useIncludeContext();
  const { ingredient, setIngredient } = useIngredientContext();

  const oneRecipe = {
    recipes: [
      {
        vegetarian: false,

        vegan: false,

        glutenFree: true,

        dairyFree: true,

        veryHealthy: false,

        cheap: false,

        veryPopular: false,

        sustainable: false,

        lowFodmap: false,

        weightWatcherSmartPoints: 13,

        gaps: "no",

        preparationMinutes: -1,

        cookingMinutes: -1,

        aggregateLikes: 29,

        healthScore: 39,

        creditsText:
          "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",

        license: "CC BY 3.0",

        sourceName: "Foodista",

        pricePerServing: 229.85,

        extendedIngredients: [
          {
            id: 10072,

            aisle: "Meat",

            image: "pork-shoulder.png",

            consistency: "SOLID",

            name: "tied pork shoulder",

            nameClean: "pork shoulder",

            original: "2 1/2 pounds tied pork shoulder",

            originalName: "tied pork shoulder",

            amount: 2.5,

            unit: "pounds",

            meta: [],

            measures: {
              us: {
                amount: 2.5,

                unitShort: "lb",

                unitLong: "pounds",
              },

              metric: {
                amount: 1.134,

                unitShort: "kgs",

                unitLong: "kgs",
              },
            },
          },

          {
            id: 1002030,

            aisle: "Spices and Seasonings",

            image: "pepper.jpg",

            consistency: "SOLID",

            name: "salt and pepper",

            nameClean: "black pepper",

            original: "Salt and freshly ground black pepper",

            originalName: "Salt and freshly ground black pepper",

            amount: 4,

            unit: "servings",

            meta: ["black", "freshly ground"],

            measures: {
              us: {
                amount: 4,

                unitShort: "servings",

                unitLong: "servings",
              },

              metric: {
                amount: 4,

                unitShort: "servings",

                unitLong: "servings",
              },
            },
          },

          {
            id: 4053,

            aisle: "Oil, Vinegar, Salad Dressing",

            image: "olive-oil.jpg",

            consistency: "LIQUID",

            name: "olive oil",

            nameClean: "olive oil",

            original: "2 tablespoons olive oil",

            originalName: "olive oil",

            amount: 2,

            unit: "tablespoons",

            meta: [],

            measures: {
              us: {
                amount: 2,

                unitShort: "Tbsps",

                unitLong: "Tbsps",
              },

              metric: {
                amount: 2,

                unitShort: "Tbsps",

                unitLong: "Tbsps",
              },
            },
          },

          {
            id: 10511282,

            aisle: "Produce",

            image: "brown-onion.png",

            consistency: "SOLID",

            name: "onions",

            nameClean: "yellow onion",

            original: "4 large yellow onions, halved, thinly sliced",

            originalName: "yellow onions, halved, thinly sliced",

            amount: 4,

            unit: "large",

            meta: ["yellow", "halved", "thinly sliced"],

            measures: {
              us: {
                amount: 4,

                unitShort: "large",

                unitLong: "larges",
              },

              metric: {
                amount: 4,

                unitShort: "large",

                unitLong: "larges",
              },
            },
          },

          {
            id: 10114037,

            aisle: "Alcoholic Beverages",

            image: "brandy.png",

            consistency: "LIQUID",

            name: "calvados brandy",

            nameClean: "brandy",

            original: "1/4 cup Calvados brandy",

            originalName: "Calvados brandy",

            amount: 0.25,

            unit: "cup",

            meta: [],

            measures: {
              us: {
                amount: 0.25,

                unitShort: "cups",

                unitLong: "cups",
              },

              metric: {
                amount: 59.147,

                unitShort: "ml",

                unitLong: "milliliters",
              },
            },
          },

          {
            id: 1089003,

            aisle: "Produce",

            image: "grannysmith-apple.png",

            consistency: "SOLID",

            name: "granny smith apple",

            nameClean: "granny smith apple",

            original:
              '1 inch large Granny Smith apple, peeled, cored, cut ½" cubes',

            originalName: 'Granny Smith apple, peeled, cored, cut ½" cubes',

            amount: 1,

            unit: "inch",

            meta: ["cored", "peeled"],

            measures: {
              us: {
                amount: 1,

                unitShort: "inch",

                unitLong: "inch",
              },

              metric: {
                amount: 1,

                unitShort: "inch",

                unitLong: "inch",
              },
            },
          },

          {
            id: 10211215,

            aisle: "Produce",

            image: "garlic.jpg",

            consistency: "SOLID",

            name: "garlic cloves",

            nameClean: "whole garlic cloves",

            original: "2 garlic cloves, chopped",

            originalName: "garlic cloves, chopped",

            amount: 2,

            unit: "",

            meta: ["chopped"],

            measures: {
              us: {
                amount: 2,

                unitShort: "",

                unitLong: "",
              },

              metric: {
                amount: 2,

                unitShort: "",

                unitLong: "",
              },
            },
          },

          {
            id: 2042,

            aisle: "Spices and Seasonings",

            image: "thyme.jpg",

            consistency: "SOLID",

            name: "thyme",

            nameClean: "dried thyme",

            original: "1 teaspoon dried thyme or 1 tablespoon fresh thyme",

            originalName: "dried thyme or 1 tablespoon fresh thyme",

            amount: 1,

            unit: "teaspoon",

            meta: ["dried", "fresh"],

            measures: {
              us: {
                amount: 1,

                unitShort: "tsp",

                unitLong: "teaspoon",
              },

              metric: {
                amount: 1,

                unitShort: "tsp",

                unitLong: "teaspoon",
              },
            },
          },

          {
            id: 1009016,

            aisle: "Beverages",

            image: "apple-cider.jpg",

            consistency: "SOLID",

            name: "apple cider",

            nameClean: "apple cider",

            original: "1 cup apple cider",

            originalName: "apple cider",

            amount: 1,

            unit: "cup",

            meta: [],

            measures: {
              us: {
                amount: 1,

                unitShort: "cup",

                unitLong: "cup",
              },

              metric: {
                amount: 236.588,

                unitShort: "ml",

                unitLong: "milliliters",
              },
            },
          },

          {
            id: 6172,

            aisle: "Canned and Jarred",

            image: "chicken-broth.png",

            consistency: "LIQUID",

            name: "chicken stock",

            nameClean: "chicken stock",

            original: "1 cup chicken stock",

            originalName: "chicken stock",

            amount: 1,

            unit: "cup",

            meta: [],

            measures: {
              us: {
                amount: 1,

                unitShort: "cup",

                unitLong: "cup",
              },

              metric: {
                amount: 236.588,

                unitShort: "ml",

                unitLong: "milliliters",
              },
            },
          },

          {
            id: 1032046,

            aisle: "Condiments",

            image: "dijon-mustard.jpg",

            consistency: "LIQUID",

            name: "dijon mustard",

            nameClean: "dijon mustard",

            original: "1 tablespoon Dijon mustard",

            originalName: "Dijon mustard",

            amount: 1,

            unit: "tablespoon",

            meta: [],

            measures: {
              us: {
                amount: 1,

                unitShort: "Tbsp",

                unitLong: "Tbsp",
              },

              metric: {
                amount: 1,

                unitShort: "Tbsp",

                unitLong: "Tbsp",
              },
            },
          },
        ],

        id: 639401,

        title:
          "Cider-Braised Pork Shoulder With Caramelized Onion and Apple Confit",

        readyInMinutes: 45,

        servings: 4,

        sourceUrl:
          "https://www.foodista.com/recipe/76WCQ5NG/cider-braised-pork-shoulder-with-caramelized-onion-and-apple-confit",

        image: "https://spoonacular.com/recipeImages/639401-556x370.jpg",

        imageType: "jpg",

        summary:
          'Cider-Braised Pork Shoulder With Caramelized Onion and Apple Confit is a <b>gluten free and dairy free</b> recipe with 4 servings. This main course has <b>467 calories</b>, <b>37g of protein</b>, and <b>20g of fat</b> per serving. For <b>$2.3 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. 29 people found this recipe to be yummy and satisfying. A mixture of garlic cloves, onions, granny smith apple, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 88%</b>. This score is excellent. <a href="https://spoonacular.com/recipes/cider-braised-pork-shoulder-with-caramelized-onion-and-apple-confit-1349233">Cider-Braised Pork Shoulder With Caramelized Onion and Apple Confit</a>, <a href="https://spoonacular.com/recipes/cider-braised-pork-shoulder-with-caramelized-onion-and-apple-co-45774">Cider-braised Pork Shoulder With Caramelized Onion And Apple Co</a>, and <a href="https://spoonacular.com/recipes/cider-braised-pork-shoulder-with-caramelized-onion-and-apple-co-1198847">Cider-braised Pork Shoulder With Caramelized Onion And Apple Co</a> are very similar to this recipe.',

        cuisines: [],

        dishTypes: ["lunch", "main course", "main dish", "dinner"],

        diets: ["gluten free", "dairy free"],

        occasions: [],

        instructions:
          "Preheat oven to 400 F.\nPat the pork dry and season with salt and pepper.\nHeat oil in a large ovenproof pot or Dutch oven with a lid.\nBrown pork on all sides, turning with tongs, 6-8 minutes per side.\nTransfer pork to a plate.\nPour off excess fat from pot.\nAdd onion and 1 teaspoon salt.\nSaut over medium heat, stirring occasionally, until the onions are very soft and deep golden brown, 18-20 minutes.\nAdd Calvados and stir to deglaze pan.\nAdd apple, garlic and thyme and cook, stirring, 30 seconds.\nReturn pork to pot, nestling it down in the onions.\nAdd cider and chicken stock.\nCover pot and place in oven.\nReduce heat to 325 F.\nBraise until meat is very tender, 2 1/2 - 3 hours.\nTransfer pork to a cutting board and remove kitchen strings.\nBoil onion and apples until thickened and liquid slightly reduced, about 2 minutes.\nStir in mustard.\nSeason to taste with salt and pepper.\nCut pork into serving pieces and arrange on platter or individual serving plates.\nSpoon onion and apple confit over and around the meat.",

        analyzedInstructions: [
          {
            name: "",

            steps: [
              {
                number: 1,

                step: "Preheat oven to 400 F.",

                ingredients: [],

                equipment: [
                  {
                    id: 404784,

                    name: "oven",

                    localizedName: "oven",

                    image: "oven.jpg",

                    temperature: {
                      number: 400,

                      unit: "Fahrenheit",
                    },
                  },
                ],
              },

              {
                number: 2,

                step: "Pat the pork dry and season with salt and pepper.",

                ingredients: [
                  {
                    id: 1102047,

                    name: "salt and pepper",

                    localizedName: "salt and pepper",

                    image: "salt-and-pepper.jpg",
                  },

                  {
                    id: 10010219,

                    name: "pork",

                    localizedName: "pork",

                    image: "pork-tenderloin-raw.png",
                  },
                ],

                equipment: [],
              },

              {
                number: 3,

                step: "Heat oil in a large ovenproof pot or Dutch oven with a lid.",

                ingredients: [
                  {
                    id: 4582,

                    name: "cooking oil",

                    localizedName: "cooking oil",

                    image: "vegetable-oil.jpg",
                  },
                ],

                equipment: [
                  {
                    id: 404667,

                    name: "dutch oven",

                    localizedName: "dutch oven",

                    image: "dutch-oven.jpg",
                  },
                ],
              },

              {
                number: 4,

                step: "Brown pork on all sides, turning with tongs, 6-8 minutes per side.",

                ingredients: [
                  {
                    id: 10010219,

                    name: "pork",

                    localizedName: "pork",

                    image: "pork-tenderloin-raw.png",
                  },
                ],

                equipment: [
                  {
                    id: 404641,

                    name: "tongs",

                    localizedName: "tongs",

                    image: "tongs.jpg",
                  },
                ],

                length: {
                  number: 8,

                  unit: "minutes",
                },
              },

              {
                number: 5,

                step: "Transfer pork to a plate.",

                ingredients: [
                  {
                    id: 10010219,

                    name: "pork",

                    localizedName: "pork",

                    image: "pork-tenderloin-raw.png",
                  },
                ],

                equipment: [],
              },

              {
                number: 6,

                step: "Pour off excess fat from pot.",

                ingredients: [],

                equipment: [
                  {
                    id: 404752,

                    name: "pot",

                    localizedName: "pot",

                    image: "stock-pot.jpg",
                  },
                ],
              },

              {
                number: 7,

                step: "Add onion and 1 teaspoon salt.",

                ingredients: [
                  {
                    id: 11282,

                    name: "onion",

                    localizedName: "onion",

                    image: "brown-onion.png",
                  },

                  {
                    id: 2047,

                    name: "salt",

                    localizedName: "salt",

                    image: "salt.jpg",
                  },
                ],

                equipment: [],
              },

              {
                number: 8,

                step: "Saut over medium heat, stirring occasionally, until the onions are very soft and deep golden brown, 18-20 minutes.",

                ingredients: [
                  {
                    id: 11282,

                    name: "onion",

                    localizedName: "onion",

                    image: "brown-onion.png",
                  },
                ],

                equipment: [],

                length: {
                  number: 20,

                  unit: "minutes",
                },
              },

              {
                number: 9,

                step: "Add Calvados and stir to deglaze pan.",

                ingredients: [
                  {
                    id: 10214037,

                    name: "calvados",

                    localizedName: "calvados",

                    image: "calvados.jpg",
                  },
                ],

                equipment: [
                  {
                    id: 404645,

                    name: "frying pan",

                    localizedName: "frying pan",

                    image: "pan.png",
                  },
                ],
              },

              {
                number: 10,

                step: "Add apple, garlic and thyme and cook, stirring, 30 seconds.",

                ingredients: [
                  {
                    id: 11215,

                    name: "garlic",

                    localizedName: "garlic",

                    image: "garlic.png",
                  },

                  {
                    id: 9003,

                    name: "apple",

                    localizedName: "apple",

                    image: "apple.jpg",
                  },

                  {
                    id: 2049,

                    name: "thyme",

                    localizedName: "thyme",

                    image: "thyme.jpg",
                  },
                ],

                equipment: [],
              },

              {
                number: 11,

                step: "Return pork to pot, nestling it down in the onions.",

                ingredients: [
                  {
                    id: 11282,

                    name: "onion",

                    localizedName: "onion",

                    image: "brown-onion.png",
                  },

                  {
                    id: 10010219,

                    name: "pork",

                    localizedName: "pork",

                    image: "pork-tenderloin-raw.png",
                  },
                ],

                equipment: [
                  {
                    id: 404752,

                    name: "pot",

                    localizedName: "pot",

                    image: "stock-pot.jpg",
                  },
                ],
              },

              {
                number: 12,

                step: "Add cider and chicken stock.",

                ingredients: [
                  {
                    id: 6172,

                    name: "chicken stock",

                    localizedName: "chicken stock",

                    image: "chicken-broth.png",
                  },

                  {
                    id: 0,

                    name: "cider",

                    localizedName: "cider",

                    image: "",
                  },
                ],

                equipment: [],
              },

              {
                number: 13,

                step: "Cover pot and place in oven.",

                ingredients: [],

                equipment: [
                  {
                    id: 404784,

                    name: "oven",

                    localizedName: "oven",

                    image: "oven.jpg",
                  },

                  {
                    id: 404752,

                    name: "pot",

                    localizedName: "pot",

                    image: "stock-pot.jpg",
                  },
                ],
              },

              {
                number: 14,

                step: "Reduce heat to 325 F.",

                ingredients: [],

                equipment: [],
              },

              {
                number: 15,

                step: "Braise until meat is very tender, 2 1/2 - 3 hours.",

                ingredients: [
                  {
                    id: 1065062,

                    name: "meat",

                    localizedName: "meat",

                    image: "whole-chicken.jpg",
                  },
                ],

                equipment: [],

                length: {
                  number: 180,

                  unit: "minutes",
                },
              },

              {
                number: 16,

                step: "Transfer pork to a cutting board and remove kitchen strings.",

                ingredients: [
                  {
                    id: 10010219,

                    name: "pork",

                    localizedName: "pork",

                    image: "pork-tenderloin-raw.png",
                  },
                ],

                equipment: [
                  {
                    id: 404716,

                    name: "cutting board",

                    localizedName: "cutting board",

                    image: "cutting-board.jpg",
                  },
                ],
              },

              {
                number: 17,

                step: "Boil onion and apples until thickened and liquid slightly reduced, about 2 minutes.",

                ingredients: [
                  {
                    id: 9003,

                    name: "apple",

                    localizedName: "apple",

                    image: "apple.jpg",
                  },

                  {
                    id: 11282,

                    name: "onion",

                    localizedName: "onion",

                    image: "brown-onion.png",
                  },
                ],

                equipment: [],

                length: {
                  number: 2,

                  unit: "minutes",
                },
              },

              {
                number: 18,

                step: "Stir in mustard.",

                ingredients: [
                  {
                    id: 2046,

                    name: "mustard",

                    localizedName: "mustard",

                    image: "regular-mustard.jpg",
                  },
                ],

                equipment: [],
              },

              {
                number: 19,

                step: "Season to taste with salt and pepper.",

                ingredients: [
                  {
                    id: 1102047,

                    name: "salt and pepper",

                    localizedName: "salt and pepper",

                    image: "salt-and-pepper.jpg",
                  },
                ],

                equipment: [],
              },

              {
                number: 20,

                step: "Cut pork into serving pieces and arrange on platter or individual serving plates.",

                ingredients: [
                  {
                    id: 10010219,

                    name: "pork",

                    localizedName: "pork",

                    image: "pork-tenderloin-raw.png",
                  },
                ],

                equipment: [],
              },

              {
                number: 21,

                step: "Spoon onion and apple confit over and around the meat.",

                ingredients: [
                  {
                    id: 9003,

                    name: "apple",

                    localizedName: "apple",

                    image: "apple.jpg",
                  },

                  {
                    id: 11282,

                    name: "onion",

                    localizedName: "onion",

                    image: "brown-onion.png",
                  },

                  {
                    id: 1065062,

                    name: "meat",

                    localizedName: "meat",

                    image: "whole-chicken.jpg",
                  },
                ],

                equipment: [],
              },
            ],
          },
        ],

        originalId: null,

        spoonacularSourceUrl:
          "https://spoonacular.com/cider-braised-pork-shoulder-with-caramelized-onion-and-apple-confit-639401",
      },
    ],
  };

  const fetchRecipeRandom = () => {
    fetch("http://localhost:3000/api/fetchrandom")
      .then((res) => res.json())
      .then((data) => {
        setRandomRecipe(data.recipes[0]);
      });
  };

  const fetchRecipeTime = () => {
    fetch("http://localhost:3000/api/fetchTimelimit")
      .then((res) => res.json())
      .then((data) => {
        setResultArray(data);
      });
  };

  const fetchRecipeInclude = () => {
    fetch(`http://localhost:3000/api/fetchinclude?ingredient=${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        setResultArray(data);
      });
  };

  // useEffect(() => {
  //   fetchRecipeTime();
  // }, []);

  // const handleRandomClick = (e) => {
  //   e.preventDefault();
  //   console.log(randomRecipe);
  //   fetchRecipeRandom();
  // };

  const handleRandomClick = (e) => {
    e.preventDefault();
    setResultArray(oneRecipe);
    console.log(resultArray);
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
    setInclude(1);
    fetchRecipeInclude();
    console.log(resultArray);
  };

  // const handleExclude = () => {
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
    setQuickRecipe((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Find Recipes</h1>
      <h2>Show me:</h2>
      <div className={styles.filterContainer}>
        <form className="searchForm">
          <fieldset className={styles.randomField}>
            <button className={styles.filterButton} onClick={handleRandomClick}>
              Random Recipe
            </button>
          </fieldset>
          <fieldset className={styles.inclusionField}>
            <div className={styles.inclusionChoiceContainer}>
              <div className={styles.ingredientContainer}>
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
              <div className={styles.inclusionChoice}>
                <input
                  className={styles.filterButton}
                  type="submit"
                  value="Include"
                  name="include"
                  onClick={handleInclude}
                />
                {/* <input
                  className={styles.filterButton}
                  type="submit"
                  value="Exclude"
                  name="exclude"
                  onClick={handleExclude}
                /> */}
                <input
                  className={styles.filterButton}
                  type="submit"
                  value="Reset"
                  name="reset"
                  onClick={handleIngredientReset}
                />
              </div>
            </div>
          </fieldset>
        </form>
        <form>
          <fieldset className={styles.timeField}>
            <input
              className={styles.filterButton}
              type="submit"
              value="Quick recipes 30min or less"
              name="quick"
              onClick={handleQuickSubmit}
            />
          </fieldset>
        </form>
        <form className={styles.showNForm}>
          <input onClick={handleShow3} type="radio" id="show3" name="show" />
          <label htmlFor="show3">Show 3 recipes</label>
          <input onClick={handleShow5} type="radio" id="show5" name="show" />
          <label htmlFor="show5">Show 5 recipes</label>
          <input onClick={handleShow10} type="radio" id="show10" name="show" />
          <label htmlFor="show10">Show 10 recipes</label>
        </form>
      </div>
    </div>
  );
}
