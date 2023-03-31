import { useResultContext } from "@/context/resultArray";

const fetchExcludeRecipe = () => {
  const { resultArray, setResultArray } = useResultContext();

  fetch("http://localhost:3000/api/fetchexclude")
    .then((res) => res.json())
    .then((data) => {
      setResultArray(data);
    });
};

export default fetchExcludeRecipe;
