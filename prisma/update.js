const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const idString = "782585,716426,715497,715415";

const fetchAll = async () => {
  try {
    const resJson = await fetch(
      `http://localhost:3000/api/fetchAll?ids=${idString}`
    );
    const data = await resJson.json();
    resultArray.push(data);
    // console.log(data);
    // console.log("1", resultArray);
  } catch (err) {
    console.log("Remote fetch error", err);
  }
};

async function main() {
  await fetchAll();
  const addIngredients = async () => {
    await addRecipes;
    resultArray[0].forEach((element) => {
      const tempId = element.id;
      element.extendedIngredients.forEach(async (el) => {
        if (typeof el.measures.metric.amount == "string") {
          await prisma.AllRecipes.update({
            where: { id: tempId },
            data: {
              Ingredients: {
                update: {
                  ingredientId: el.id,
                  ingredient: el.originalName,
                  amountText: el.measures.metric.amount,
                },
              },
            },
          });
        } else if (typeof el.measures.metric.amount == "number") {
          if (Number.isInteger(el.measures.metric.amount)) {
            await prisma.AllRecipes.update({
              where: { id: tempId },
              data: {
                Ingredients: {
                  update: {
                    ingredientId: el.id,
                    ingredient: el.originalName,
                    amountInt: el.measures.metric.amount,
                  },
                },
              },
            });
          } else {
            await prisma.AllRecipes.update({
              where: { id: tempId },
              data: {
                Ingredients: {
                  update: {
                    ingredientId: el.id,
                    ingredient: el.originalName,
                    amountFloat: el.measures.metric.amount,
                  },
                },
              },
            });
          }
        }
      });
    });
    console.log("done!");
  };
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
