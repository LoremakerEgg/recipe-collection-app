// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const all = await prisma.AllRecipes.findMany({});
    res.status(200).json(all);
  } catch (err) {
    console.log(err);
    res.status(500).json("Something wnet weriong");
  }
}
