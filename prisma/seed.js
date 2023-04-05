const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resultArray = [];
const recipeIdFetchArray = [];
let idString = "";

const fetchIds = async () => {
  try {
    const resJson = await fetch("http://localhost:3000/api/fetchIds");
    const data = await resJson.json();
    recipeIdFetchArray.push(data);
    console.log("recipeIdFetchArray", recipeIdFetchArray);
    console.log(recipeIdFetchArray[0]);
  } catch (err) {
    console.log("Remote fetch error", err);
  }
};

const fetchAll = async () => {
  try {
    const resJson = await fetch(
      `http://localhost:3000/api/fetchAll?ids=${idString}`
    );
    const data = await resJson.json();
    resultArray.push(data);
    console.log(data);
    console.log("1", resultArray);
  } catch (err) {
    console.log("Remote fetch error", err);
  }
};

async function getQueryIds() {
  //   const { resultArray, setResultArray } = useResultContext();
  await fetchIds();

  const idArray = recipeIdFetchArray[0].results.map((item) => {
    return item.id;
  });
  idString = idArray.toString();

  //   console.log(idString);
  console.log("get result done!");
}

async function getResultArray() {
  await getQueryIds();
  console.log(idString);
  await fetchAll();
  console.log("2", resultArray[0][0]);
}

async function main() {
  await getResultArray();

  //   console.log(resultArray);
  // const test = resultArray[0].map((element) => {
  //   return {
  //     id: element.id,
  //     recipeTitle: element.title,
  //     recipeImageURL: element.image,
  //     cookingTime: element.readyInMinutes,
  //     servings: element.servings,
  //     instructions: element.instructions,
  //   };
  // });
  // const id = resultArray[0][0].id;
  // const title = resultArray[0][0].title;
  // const image = resultArray[0][0].image;
  // const cookTime = resultArray[0][0].readyInMinutes;
  // const servings = resultArray[0][0].servings;
  // const instructions = resultArray[0][0].instructions;
  //   const ingredientId = resultArray[1].extendedIngredients[].id; //TODO need to loop through e.I.Array
  //   const ingredient = resultArray[1].extendedIngredients[].originalName;
  //   const amount = resultArray[1].extendedIngredients[].measures.metric.amount;

  resultArray[0].forEach(async (element) => {
    await prisma.AllRecipes.create({
      data: {
        id: element.id,
        recipeTitle: element.title,
        recipeImageURL: element.image,
        cookingTime: element.readyInMinutes,
        servings: element.servings,
        CookingInstructions: { create: { instructions: element.instructions } },
      },
    });
  });

  //   const firstRecipe = await prisma.AllRecipes.create(
  //     {
  //       // where: { id: id },
  //       // update: {},
  //       // create: {
  //       data: test,
  //       //   {
  //       //     id: 782585,
  //       //     recipeTitle: "Cannellini Bean and Asparagus Salad with Mushrooms",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/782585-312x231.jpg",
  //       //     cookingTime: 45,
  //       //     servings: 6,
  //       //   },
  //       //   {
  //       //     id: 716426,
  //       //     recipeTitle: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/716426-312x231.jpg",
  //       //     cookingTime: 30,
  //       //     servings: 8,
  //       //   },
  //       //   {
  //       //     id: 715497,
  //       //     recipeTitle: "Berry Banana Breakfast Smoothie",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/715497-312x231.jpg",
  //       //     cookingTime: 5,
  //       //     servings: 1,
  //       //   },
  //       //   {
  //       //     id: 715415,
  //       //     recipeTitle: "Red Lentil Soup with Chicken and Turnips",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/715415-312x231.jpg",
  //       //     cookingTime: 55,
  //       //     servings: 8,
  //       //   },
  //       //   {
  //       //     id: 716406,
  //       //     recipeTitle: "Asparagus and Pea Soup: Real Convenience Food",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/716406-312x231.jpg",
  //       //     cookingTime: 20,
  //       //     servings: 2,
  //       //   },
  //       //   {
  //       //     id: 644387,
  //       //     recipeTitle: "Garlicky Kale",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/644387-312x231.jpg",
  //       //     cookingTime: 45,
  //       //     servings: 2,
  //       //   },
  //       //   {
  //       //     id: 715446,
  //       //     recipeTitle: "Slow Cooker Beef Stew",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/715446-312x231.jpg",
  //       //     cookingTime: 490,
  //       //     servings: 6,
  //       //   },
  //       //   {
  //       //     id: 782601,
  //       //     recipeTitle: "Red Kidney Bean Jambalaya",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/782601-312x231.jpg",
  //       //     cookingTime: 45,
  //       //     servings: 6,
  //       //   },
  //       //   {
  //       //     id: 795751,
  //       //     recipeTitle: "Chicken Fajita Stuffed Bell Pepper",
  //       //     recipeImageURL:
  //       //       "https://spoonacular.com/recipeImages/795751-312x231.jpg",
  //       //     cookingTime: 45,
  //       //     servings: 3,
  //       //   },
  //       // ],
  //       // skipDuplicates: true,
  //       // id: id,
  //       // recipeTitle: title,
  //       // recipeImageURL: image,
  //       // cookingTime: cookTime,
  //       // servings: servings,
  //       // CookingInstructions: {
  //       //   create: {
  //       //     instructions: instructions,
  //       //   },
  //       // },
  //       // Ingredients: {
  //       //     create: {
  //       //         ingredientId: ingredientId,
  //       //         ingredient: ingredient,
  //       //         amount: amount,
  //       //     }
  //       // },
  //     }
  //     // }
  //   );

  //   //   const bob = await prisma.user.upsert({
  //   //     where: { email: "bob@prisma.io" },
  //   //     update: {},
  //   //     create: {
  //   //       email: "bob@prisma.io",
  //   //       name: "Bob",
  //   //       posts: {
  //   //         create: [
  //   //           {
  //   //             title: "Follow Prisma on Twitter",
  //   //             content: "https://twitter.com/prisma",
  //   //             published: true,
  //   //           },
  //   //           {
  //   //             title: "Follow Nexus on Twitter",
  //   //             content: "https://twitter.com/nexusgql",
  //   //             published: true,
  //   //           },
  //   //         ],
  //   //       },
  //   //     },
  //   //   });
  //   console.log({ firstRecipe });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
