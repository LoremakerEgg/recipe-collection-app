const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function handler(req, res) {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=6cce648a4777411da156f8d6d89f1772&maxReadyTime=30`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      res.status(200).send(data);
    });
}
