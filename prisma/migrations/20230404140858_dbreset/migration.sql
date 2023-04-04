/*
  Warnings:

  - The primary key for the `AllRecipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `cookingTime` column on the `AllRecipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `servings` column on the `AllRecipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Ingredients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `AllRecipes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipeId` on the `CookingInstructions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ingredientId` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipeId` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CookingInstructions" DROP CONSTRAINT "CookingInstructions_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_recipeId_fkey";

-- AlterTable
ALTER TABLE "AllRecipes" DROP CONSTRAINT "AllRecipes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "recipeTitle" SET DATA TYPE TEXT,
ALTER COLUMN "recipeImageURL" SET DATA TYPE TEXT,
DROP COLUMN "cookingTime",
ADD COLUMN     "cookingTime" INTEGER,
DROP COLUMN "servings",
ADD COLUMN     "servings" INTEGER,
ADD CONSTRAINT "AllRecipes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CookingInstructions" ALTER COLUMN "instructions" SET DATA TYPE TEXT,
DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_pkey",
DROP COLUMN "ingredientId",
ADD COLUMN     "ingredientId" INTEGER NOT NULL,
DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" INTEGER NOT NULL,
ALTER COLUMN "ingredient" SET DATA TYPE TEXT,
ALTER COLUMN "amount" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("ingredientId");

-- CreateIndex
CREATE UNIQUE INDEX "AllRecipes_id_key" ON "AllRecipes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_ingredientId_key" ON "Ingredients"("ingredientId");

-- AddForeignKey
ALTER TABLE "CookingInstructions" ADD CONSTRAINT "CookingInstructions_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "AllRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "AllRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
