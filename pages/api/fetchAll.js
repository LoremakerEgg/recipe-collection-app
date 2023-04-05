const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function handler(req, res) {
  fetch(
    `https://api.spoonacular.com/recipes/informationBulk?apiKey=6cce648a4777411da156f8d6d89f1772&ids=${req.query.ids}`,
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
