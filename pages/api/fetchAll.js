const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function handler(req, res) {
  fetch(
    `https://api.spoonacular.com/recipes/informationBulk?apiKey=2a9a049c66f94c59812cc5d2bc81b1f1&ids=${req.query.ids}`,
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
