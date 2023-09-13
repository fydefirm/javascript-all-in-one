// Reducing an array
// The reduce() function runs a reducer function on each element of an
// array. A reducer function is one that reduces an array from muliple
// values to a single value.

let prices = [4.99, 3, 98, 54.99];
let total = 0;

total = prices.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});

// Here's how this function works:
// 1. Create an array of prices.
// 2. Initialize the total to 0.
// 3. Call the reduce() function on the prices array and pass it a
//  function that adds together the current value with the previous
//  value.
// 4. The reduce() function calls the passed-in reducer function
//  once for each element in the array and then passes the result
//  of each run into the next call of the function.

// Simplify code for the reduce() function
// 1. pass initial value arguement as second argument of reduce()
let anotherTotal = prices.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

// 2. Use arrow syntax
let total2 = prices.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
