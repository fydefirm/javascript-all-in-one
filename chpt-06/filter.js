// Fitering arrays
// The filter() method applies a test to each element of an array and
// returns a new array with just the elements that pass the test.
// example: use filter() to find the words that starts with the letter
// "a"
const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];
const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);

console.log(animalsStartingWithA);
