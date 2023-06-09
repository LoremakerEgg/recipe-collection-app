const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const all = await prisma.AllRecipes.findMany({
      where: { cookingTime: { lte: 30 } },
    });
    res.status(200).json(all);
  } catch (err) {
    console.log(err);
    res.status(500).json("Something went wrong");
  }
}
