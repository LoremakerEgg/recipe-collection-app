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

