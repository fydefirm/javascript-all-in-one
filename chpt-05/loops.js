/*
Loops (iterative statements) In Javascript
- for
- for...in
- for...of
- do...while
- while
*/

// for loop
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// for...in loop
// This loop iterates over the properties of an object and the
// properties it inherits from its parent object.
const house = {
  sqft: 800,
  bdRooms: 2,
  bthRooms: 1,
};

for (let prop in house) {
  houseDetails = `${prop}: ${house[prop]}`;
  console.log(houseDetails);
}

// for...of loop
// This loop creates a loop by iterating over any iterable object.
// An iterable object is an object that can be iterated over e.g.
// arrays and strings
const pets = ["cat", "dog", "chicken"];
for (let pet of pets) {
  console.log(pet);
}

let text = "spell me.";
for (let character of text) {
  console.log(character);
}

// while loop
// see while.html

// do...while loop
// see do-while.html

// break and continue statements
// used to interrupt the execution of a loop.
// break causes the current loop or control statement to exit.
// continue halts execution of the current iteration of the loop
// and goes directly to the next iteration.
// Use continue to loop over the digits of a phone number and remove
// dashes from it:
let phoneNumber = "555-757-1212";
for (let digit of phoneNumber) {
  if (digit === "-") continue;
  console.log(digit);
}
