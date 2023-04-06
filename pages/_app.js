import { RandomWrapper } from "@/Archive/randomRecipe";
import { ResultWrapper } from "@/context/resultArray";
import { QuickWrapper } from "@/Archive/quickRecipe";
import { IngredientWrapper } from "@/context/ingredient";
import { NRecipesWrapper } from "@/context/showNRecipes";
import { IncludeWrapper } from "@/Archive/include";
import { RecipeWrapper } from "@/context/showRecipe";

import "@/styles/globals.scss";
import { Lato } from "next/font/google";
import { FullRecipekWrapper } from "@/context/showFullRecipe";
import { InstructionWrapper } from "@/context/showInstructions";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ResultWrapper>
      <QuickWrapper>
        {" "}
        <RandomWrapper>
          <IncludeWrapper>
            <IngredientWrapper>
              <NRecipesWrapper>
                <RecipeWrapper>
                  <InstructionWrapper>
                    <FullRecipekWrapper>
                      <main className={lato.className}>
                        <Component {...pageProps} />
                      </main>
                    </FullRecipekWrapper>
                  </InstructionWrapper>
                </RecipeWrapper>
              </NRecipesWrapper>
            </IngredientWrapper>
          </IncludeWrapper>
        </RandomWrapper>{" "}
      </QuickWrapper>
    </ResultWrapper>
  );
}
