const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function handler(req, res) {
  fetch(
    "https://api.spoonacular.com/recipes/716429/information?apiKey=2a9a049c66f94c59812cc5d2bc81b1f1&includeNutrition=true",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    });
}
