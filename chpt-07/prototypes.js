// Every object in JavaScript inherits properties and methods from a
// prototype. For example, when you create an array, it inherits from
// Array.prototype. Array, in turn inherits from Object.prototype.
// When you create a new object using literal notation, it inherits
// properties from Object.prototype. When you use a constructor function
// or a class to create an object, the class or constructor becomes
// the prototype.

function Vehicle(speed) {
  this.speed = speed;
  this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
  };
}

const Automobile = new Vehicle(55);
Automobile.wheels = 4;
Automobile.engine = "electric";

console.log(Automobile);

const Truck = Object.create(Automobile);
console.log(Truck);

Automobile.doors = 4;

console.log(Truck);

Truck.hasOwnProperty("doors");

Truck.doors = 2;

Truck.hasOwnProperty("doors");

delete Truck.doors;
