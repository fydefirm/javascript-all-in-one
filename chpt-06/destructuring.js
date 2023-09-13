// Destructing Arrays
// Destructuring is the process of unpacking values from an array or
// an object into separate variables.
// With an array, you can create separate variables and assign array
// data using their index as below:

const person = ["Russell C. Guy", "3447 Twin House Lane", "Neosho", "MO"];

// let personName = person[0];
// let address = person[1];
// let city = person[2];
// let state = person[3];

// An easier way to initialize these individual variable is to use
// destructuring syntax by creating a list of variable names in square
// brackets on the left side of the assignment operator and specify an
// array on the right:
let [personName, address, city, state] = person;
console.log(`${personName} lives at ${address} in ${city} ${state}`);
