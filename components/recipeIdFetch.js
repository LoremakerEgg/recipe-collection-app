// import { useResultContext } from "@/context/resultArray";

const recipeIdFetchArray = [];
const resultArray = [];
let idString = "";

const fetchIds = async () => {
  try {
    const resJson = await fetch("http://localhost:3000/api/fetchIds");
    const data = await resJson.json();
    recipeIdFetchArray.push(data);
    console.log("recipeIdFetchArray", recipeIdFetchArray);
    console.log(recipeIdFetchArray[0]);
  } catch (err) {
    console.log("Remote fetch error", err);
  }
};

const fetchAll = async () => {
  try {
    const resJson = await fetch(
      `http://localhost:3000/api/fetchAll?ids=${idString}`
    );
    const data = await resJson.json();
    resultArray.push(data);
    console.log(data);
    console.log("1", resultArray);
  } catch (err) {
    console.log("Remote fetch error", err);
  }
};

async function getQueryIds() {
  //   const { resultArray, setResultArray } = useResultContext();
  await fetchIds();

  const idArray = recipeIdFetchArray[0].results.map((item) => {
    return item.id;
  });
  idString = idArray.toString();

  //   console.log(idString);
  console.log("get result done!");
}

async function getResultArray() {
  await getQueryIds();
  console.log(idString);
  await fetchAll();
  console.log("2", resultArray[0].results);
}

getResultArray();
