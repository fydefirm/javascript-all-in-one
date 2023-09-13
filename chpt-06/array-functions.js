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

// pop()
// removes last element and returns the removed element
ingredients.pop();

// if you want to remove the last element and then do something with
// the removed element, you can assign the result of the pop method
// to a new variable.
let removedElement = ingredients.pop();

// push()
// adds a value as a new element and returns the new length of the array
ingredients.push("chili flakes");

// shift() and unshift()
// works the same as pop() and push(), but it does its work to the
// beginning of the array.

// shift()
// removes the first element and returns the removed value.
ingredients.shift();

// unshift()
// adds a new element to the beginning and returns the new length.
ingredients.unshift("eggs");

// slice()
// selects a portion of the array and returns a new array with just
// that portion. The original array isn't modified.
// To use splice(), give it the starting element's index number and
// the ending element's index number. The new array contains everything
// from the starting element to the element before the ending element.
ingredients.slice(3, 6);

// splice()
// takes a starting element and a number of elements to remove and
// removes those elements from an array, returning the removed elements
ingredients.splice(3, 3);
