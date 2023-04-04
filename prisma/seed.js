const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resultArray = [];

const fetchRecipeRandom = async () => {
  const resJson = await fetch("http://localhost:3000/api/fetchrandom");
  const data = await resJson.json();
  resultArray.push(data.recipes[0]);
};

async function main() {
  await fetchRecipeRandom();
  console.log(resultArray);
  const id = resultArray[0].id;
  const title = resultArray[0].title;
  const image = resultArray[0].image;
  const cookTime = resultArray[0].reayInMinutes;
  const servings = resultArray[0].servings;

  const firstRecipe = await prisma.AllRecipes.upsert({
    where: { id: id },
    update: {},
    create: {
      id: id,
      recipeTitle: title,
      recipeImageURL: image,
      cookingTime: cookTime,
      servings: servings,
      //   posts: {
      //     create: {

      //     },
      //   },
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
