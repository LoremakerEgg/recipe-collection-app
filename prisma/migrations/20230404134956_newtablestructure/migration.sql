/*
  Warnings:

  - The primary key for the `AllRecipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `recipeImageURL` column on the `AllRecipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cookingTime` column on the `AllRecipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `servings` column on the `AllRecipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `instructions` column on the `CookingInstructions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Ingredients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `AllRecipes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipeTitle` on the `AllRecipes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipeId` on the `CookingInstructions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ingredientId` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipeId` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ingredient` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `amount` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CookingInstructions" DROP CONSTRAINT "CookingInstructions_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_recipeId_fkey";

-- AlterTable
ALTER TABLE "AllRecipes" DROP CONSTRAINT "AllRecipes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" JSONB NOT NULL,
DROP COLUMN "recipeTitle",
ADD COLUMN     "recipeTitle" JSONB NOT NULL,
DROP COLUMN "recipeImageURL",
ADD COLUMN     "recipeImageURL" JSONB,
DROP COLUMN "cookingTime",
ADD COLUMN     "cookingTime" JSONB,
DROP COLUMN "servings",
ADD COLUMN     "servings" JSONB,
ADD CONSTRAINT "AllRecipes_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE cookinginstructions_instructionid_seq;
ALTER TABLE "CookingInstructions" ALTER COLUMN "instructionId" SET DEFAULT nextval('cookinginstructions_instructionid_seq'),
DROP COLUMN "instructions",
ADD COLUMN     "instructions" JSONB,
DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" JSONB NOT NULL;
ALTER SEQUENCE cookinginstructions_instructionid_seq OWNED BY "CookingInstructions"."instructionId";

-- AlterTable
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_pkey",
DROP COLUMN "ingredientId",
ADD COLUMN     "ingredientId" JSONB NOT NULL,
DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" JSONB NOT NULL,
DROP COLUMN "ingredient",
ADD COLUMN     "ingredient" JSONB NOT NULL,
DROP COLUMN "amount",
ADD COLUMN     "amount" JSONB NOT NULL,
ADD CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("ingredientId");

-- CreateIndex
CREATE UNIQUE INDEX "AllRecipes_id_key" ON "AllRecipes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_ingredientId_key" ON "Ingredients"("ingredientId");

-- AddForeignKey
ALTER TABLE "CookingInstructions" ADD CONSTRAINT "CookingInstructions_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "AllRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "AllRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
