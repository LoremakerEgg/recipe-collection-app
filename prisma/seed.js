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
  console.log("2", resultArray[0].results);
}

async function main() {
  await getResultArray();

  //   console.log(resultArray);

  const id = resultArray[0].id;
  const title = resultArray[0].title;
  const image = resultArray[0].image;
  const cookTime = resultArray[0].reayInMinutes;
  const servings = resultArray[0].servings;
  const instructions = resultArray[0].instructions;
  //   const ingredientId = resultArray[1].extendedIngredients[].id; //TODO need to loop through e.I.Array
  //   const ingredient = resultArray[1].extendedIngredients[].originalName;
  //   const amount = resultArray[1].extendedIngredients[].measures.metric.amount;

  const firstRecipe = await prisma.AllRecipes.upsert({
    where: { id: id },
    update: {},
    create: {
      id: id,
      recipeTitle: title,
      recipeImageURL: image,
      cookingTime: cookTime,
      servings: servings,
      CookingInstructions: {
        create: {
          instructions: instructions,
        },
      },
      // Ingredients: {
      //     create: {
      //         ingredientId: ingredientId,
      //         ingredient: ingredient,
      //         amount: amount,
      //     }
      // },
    },
  });

  //   const bob = await prisma.user.upsert({
  //     where: { email: "bob@prisma.io" },
  //     update: {},
  //     create: {
  //       email: "bob@prisma.io",
  //       name: "Bob",
  //       posts: {
  //         create: [
  //           {
  //             title: "Follow Prisma on Twitter",
  //             content: "https://twitter.com/prisma",
  //             published: true,
  //           },
  //           {
  //             title: "Follow Nexus on Twitter",
  //             content: "https://twitter.com/nexusgql",
  //             published: true,
  //           },
  //         ],
  //       },
  //     },
  //   });
  console.log({ firstRecipe });
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
