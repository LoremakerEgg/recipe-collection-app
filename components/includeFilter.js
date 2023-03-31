import { useResultContext } from "@/context/resultArray";

const fetchIncludeRecipe = () => {
  const { resultArray, setResultArray } = useResultContext();

  fetch("http://localhost:3000/api/fetchinclude")
    .then((res) => res.json())
    .then((data) => {
      setResultArray(data);
    });
};

export default fetchIncludeRecipe;
