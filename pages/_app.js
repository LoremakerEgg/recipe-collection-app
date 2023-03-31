import { RandomWrapper } from "@/context/randomRecipe";
import { ResultWrapper } from "@/context/resultArray";
import { QuickWrapper } from "@/context/quickRecipe";
import { IngredientWrapper } from "@/context/ingredient";
import { NRecipesWrapper } from "@/context/showNRecipes";
import { IncludeWrapper } from "@/context/include";

import "@/styles/globals.scss";
import { Lato } from "next/font/google";
import { FullRecipekWrapper } from "@/context/showFullRecipe";

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
                <FullRecipekWrapper>
                  <main className={lato.className}>
                    <Component {...pageProps} />
                  </main>
                </FullRecipekWrapper>
              </NRecipesWrapper>
            </IngredientWrapper>
          </IncludeWrapper>
        </RandomWrapper>{" "}
      </QuickWrapper>
    </ResultWrapper>
  );
}
