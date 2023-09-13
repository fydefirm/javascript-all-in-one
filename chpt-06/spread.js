// Spreading Arrays
// Spread syntax expands(or spreads) an iterable object (such as an array)
// into its component parts. To use spread syntax, preface the name of
// an array with three dots (...).
// Spread syntax is often used to pass all values of an array into a
// function or to copy the values from one array into another:

const firstArray = ["a", "b", "c"];
const secondArray = [...firstArray, "d"];

console.log(firstArray);
console.log(secondArray);

// A copy of an array created using spread syntax is called a shallow
// copy because it contains just the values from the original array
// and has no reference to the original array i.e changes made to the
// shallow copy does not affect the original array.
