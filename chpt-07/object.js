// Objects
// Objects are reusable component consisting of data and functionality.

// Creating Objects:
// 1. Literal Notation

const pencil = {
  length: "7.5 inches",
  shape: "hexagonal",
  diameter: "1/4 inch",
  write: function () {
    /* do writing */
  },
  erase: function () {
    /* do erasing */
  },
  sharpen: function () {
    /* do sharpening */
  },
};

// like arrays, you can create a shallow copy of an object by using
// the spread syntax:

const newPencil = { ...pencil };

// 2. Constructor function
function Cat(name, type) {
  this.name = name;
  this.type = type;
}

const ourCat = new Cat("Murray", "domestic short hair");

// The keyword "this" refers to the context in which a function, such
// as the constructor function, is running. In this example "this"
// refers to the new object.

// 3. Class
// a class is a template for objects.
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const ourDog = new Pet("Chauncey", "AmStaff");

// 4. Object.create()
// The Object.create() method makes a new object and uses an existing
// object as the new object's prototype.
const computer = { memory: "16GB", HD: "8TB" };

const laptop = Object.create(computer);

// square brackets notation
// for (const property in Document) {
//   console.log(`${property}: ${document[property]}`);
// }
