/*
  Warnings:

  - You are about to drop the column `amount` on the `Ingredients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ingredients" DROP COLUMN "amount",
ADD COLUMN     "amountFloat" DOUBLE PRECISION,
ADD COLUMN     "amountInt" INTEGER,
ADD COLUMN     "amountText" TEXT;
