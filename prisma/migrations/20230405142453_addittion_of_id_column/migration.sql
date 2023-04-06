/*
  Warnings:

  - The primary key for the `Ingredients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[idPrim]` on the table `Ingredients` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Ingredients_ingredientId_key";

-- AlterTable
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_pkey",
ADD COLUMN     "idPrim" SERIAL NOT NULL,
ALTER COLUMN "ingredient" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL,
ALTER COLUMN "ingredientId" DROP NOT NULL,
ADD CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("idPrim");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_idPrim_key" ON "Ingredients"("idPrim");
