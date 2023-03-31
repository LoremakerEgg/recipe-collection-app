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

const fetchInclude = () => {
fetch("http://localhost:3000/api/fetchinclude")
.then((res) => res.json())
.then((data) => {
console.log(data);
// setResultArray(data);
});
}; //unfinished functionality, needs to be implemented in conjunction with ability to filter ingredients (get form data from include/exclude)

const fetchExclude = () => {
fetch("http://localhost:3000/api/fetchexclude")
.then((res) => res.json())
.then((data) => {
console.log(data);
// setResultArray(data);
});
}; //unfinished functionality, needs to be implemented in conjunction with ability to filter ingredients (get form data from include/exclude)
