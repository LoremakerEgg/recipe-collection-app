Available Global states:

- Random recipe array & set Random recipe array
  import:
  import { useRandomContext } from "@/context/randomRecipe";

define const:
const { randomRecipe } = useRandomContext();

use as:
randomRecipe.ObejctKeyName(s)
?setRandomRecipe(What you want)?

- filter results array & set filter results array
  import:
  import { useResultContext } from "@/context/resultArray";

define const:
const { resultArray } = useResultContext();

use as:
resultArray.ObejctKeyName(s)
?resultArray(What you want)?

AFTER MVP:

Create SQL fetch path for ID, (include, 30 mins or less) so that each card is clickable and shows the recipe/ingredients/instructions

Create EXCLUDE functionality with SQL

npx prisma format
npx prisma migrate reset (npx prisma migrate dev)
npx prisma studio

SUPABASE FETCH

const {data, error} = await supabase
.from("TABLE")
.select("XYZ")

https://supabase.com/docs/reference/javascript/select

npm install @supabase/supabase-js
