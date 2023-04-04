const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function handler(req, res) {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=38b44260bc3b4308a48fd29112faaaae&includeIngredients=${req.query.ingredient}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("Remote fetch completed.");
    });
}
