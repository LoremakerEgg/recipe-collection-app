import { ResultWrapper } from "@/context/resultArray";
import { IngredientWrapper } from "@/context/ingredient";
import { NRecipesWrapper } from "@/context/showNRecipes";
import { IncludeWrapper } from "@/context/include";
import { RecipeWrapper } from "@/context/showRecipe";

import "@/styles/globals.scss";
import { Lato } from "next/font/google";
import { FullRecipekWrapper } from "@/context/showFullRecipe";
import { InstructionWrapper } from "@/context/showInstructions";
import { AllRecipeWrapper } from "@/context/allRecipesArray";
import { RecipeIngredientWrapper } from "@/context/recipeIngredient";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ResultWrapper>
      <IncludeWrapper>
        <IngredientWrapper>
          <RecipeIngredientWrapper>
            <NRecipesWrapper>
              <AllRecipeWrapper>
                <RecipeWrapper>
                  <InstructionWrapper>
                    <FullRecipekWrapper>
                      <main className={lato.className}>
                        <Component {...pageProps} />
                        <div className="wave" style={{ height: "200px" }}></div>
                      </main>
                    </FullRecipekWrapper>
                  </InstructionWrapper>
                </RecipeWrapper>
              </AllRecipeWrapper>
            </NRecipesWrapper>
          </RecipeIngredientWrapper>
        </IngredientWrapper>
      </IncludeWrapper>
    </ResultWrapper>
  );
}
