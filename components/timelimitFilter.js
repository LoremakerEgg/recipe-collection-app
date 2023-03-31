import { useResultContext } from "@/context/resultArray";

const fetchRecipeTime = () => {
  const { resultArray, setResultArray } = useResultContext();

  fetch("http://localhost:3000/api/fetchTimelimit")
    .then((res) => res.json())
    .then((data) => {
      setResultArray(data);
    });
};

export default fetchRecipeTime;
