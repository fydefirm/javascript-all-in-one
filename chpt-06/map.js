//  Mapping an array
// The map() array function takes a callback function and returns a new
// array with the result of applying the callback function to each
// element of the array.
const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];

let listItems = ingredients.map((singleIngredient) => {
  `<li>${singleIngredient}</li>`;
  console.log(singleIngredient);
});
