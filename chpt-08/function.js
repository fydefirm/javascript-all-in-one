// FUNCTIONS

// function declaration are hoisted while function expressions are not
// hoisted.

// Arrow Function (side by side with function declaration)

// 1. Function Declaration Style
const pickAMovie = function (choices) {
  let myPick = choices[Math.floor(Math.random() * choices.length)];
  return myPick;
};

// 2. Arrow Function Style
const pickAMovie2 = (choices) => {
  let myPick = choices[Math.floor(Math.random() * choices.length)];
  return myPick;
};

// Simplifying arrow functions
// 1. If an arrow function takes only one parameter, you don't need to
//      include the parentheses around the parameter list.
// 2. If an arrow function contains only a return statement, you can
//      eliminate the return keyword and the curly braces around
//      the function body.

const pickAMovie3 = (choices) =>
  choices[Math.floor(Math.random() * choices.length)];

// Methods
// A function inside an object is called a method. A method can access
// and modify the other properties of an object by using the "this"
// keyword.

const myCar = {
  speed: 0,
  drive: function (speedLimit) {
    this.speed = speedLimit;
    console.log(`Driving at $(this.speed)mph.`);
  },
};

// You can also write methods using method notation, which combines
// the left and right sides of the colon, like this:

const myOtherCar = {
  speed: 0,
  drive(speedLimit) {
    this.speed = speedLimit;
    console.log(`Driving at $(this.speed)mph.`);
  },
};

// Method call
myCar.drive(35);
myOtherCar.drive(100);

// "Context" and "this"
// The value of "this" is the object that owns the method. Another
// name for the object that determines the value of "this" in a
// function is "context"

// When you call a function that uses the "this" keyword but don't
// specify an object to call the function on (a "context", in other words),
// the "this" keyword will refer to the global object by default, which
// is the "window" object in a browser.
// To solve this problem, you can take one of two approaches:
// 1. Pass the object as a parameter to the function.
// 2. Set the context of the function.

// 1. Passing an object to a function
const myTruck = {
  speed: 0,
};

const myCar2 = {
  speed: 0,
};

function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
  console.log(`Driving at ${vehicle.speed}mph.`);
}

drive(myCar2, 55);
drive(myTruck, 55);

// 2. Setting the context of a function
// Another way to use the same function with multiple objects is by
// setting the context of the function (i.e. the object it should be called on)
// using call(), apply(), or bind().

// call()
// when call() method is called on a function, that function runs in
// the context of the object passed to call()
// first parameter: an object
// after the first parameter, call() accepts any number of additional
// arguments.

drive.call(myCar, 65);

// apply()
// works same as call but takes an array as second parameter.

// bind()
// works same as call(). However rather than return the result of
// calling the function, bind() retruns a new function. You can
// assign this new function to a variable to create a new callable
// function that includes its context and data.

const driveMyCarOnTheFreeway = drive.bind(myCar, 65);

// you can now call the new function and drive on the freeway

driveMyCarOnTheFreeway();
