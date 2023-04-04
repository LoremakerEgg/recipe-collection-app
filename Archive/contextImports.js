import { useState, useEffect } from "react";

import { useRandomContext } from "@/Archive/randomRecipe";
import { useIncludeContext } from "@/Archive/include";
import { useQuickReipeContext } from "@/Archive/quickRecipe";

const { randomRecipe, setRandomRecipe } = useRandomContext();
const { quickRecipe, setQuickRecipe } = useQuickReipeContext();
const { include, setInclude } = useIncludeContext();

// const handleRandomClick = (e) => {
//   e.preventDefault();
//   setResultArray(randomRecipe);
//   console.log(randomRecipe);
// };

// setQuickRecipe((prev) => !prev);
