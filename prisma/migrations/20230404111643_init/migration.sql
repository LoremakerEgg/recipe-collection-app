-- CreateTable
CREATE TABLE "AllRecipes" (
    "id" INTEGER NOT NULL,
    "recipeTitle" TEXT NOT NULL,
    "recipeImageURL" TEXT NOT NULL,
    "cookingTime" INTEGER NOT NULL,
    "servings" INTEGER NOT NULL,
    "randomId" SERIAL NOT NULL,

    CONSTRAINT "AllRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CookingInstructions" (
    "instructionId" INTEGER NOT NULL,
    "instructions" TEXT NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "CookingInstructions_pkey" PRIMARY KEY ("instructionId")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "ingredientId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "ingredient" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("ingredientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "AllRecipes_id_key" ON "AllRecipes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CookingInstructions_instructionId_key" ON "CookingInstructions"("instructionId");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_ingredientId_key" ON "Ingredients"("ingredientId");

-- AddForeignKey
ALTER TABLE "CookingInstructions" ADD CONSTRAINT "CookingInstructions_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "AllRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "AllRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
