// CLASS
// Like constructor functions, classes are templates for objects. At
// their core, they're built on prototypes.

// Base Classes
class MyClass {} // most basic class creation syntax

// Class Expression
const MyClass = class MyClass {}; // using an expression to create a class

// Instances of base classes
const myObject = new MyClass(); // making an object from a class

// As with the constructor function method of creating an object,
// invoking the name of a class with the "new" keyword causes the
// class's constructor function to run. If you don't provide your own
// constructor function inside a base class, Javascript runs a default
// constructor, which looks like this: construct(){}

// Derived Classes
// A derived class is one that has a parent class it inherits from.

class Coffee extends Beverage {} // New Coffee class, parent Beverage

// one of the basic concept of Object-oriented programming - inheritance
// is implemented by derived class. A common way to describe a derived
// class is to say "is a." In this case, Coffee is a Beverage.

// Constructors
// A constructor is a method (always named constructor()) in a class
// that runs whenever a class is invoked with "new" and creates an
// object instance.
// If instances of the class need to be initialized with data before
// other methods can be called, the way to do this is with a constructor.

class Beverage {
  constructor() {
    // your code here
  }
}

class Beverage {
  constructor(size, temperature) {
    this.size = size;
    this.temperature = temperature;
  }
}

// A constructor function in a derived class must have a call to super()
// before any other statements, passing to it the values with which you
// want to initialize the properties of the parent.
// Note: calling super() is exactly the same as calling the constructor
// function of the parent class.

class Coffee extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
}

const morningCoffee = new Coffee("64oz", "hot", true, "black");

// Beyond being the place to initialize properties of objects, the
// class constructor is where you can bind methods to the new object.

// Creating methods in a class
class Beverage {
  constructor(size, temperature) {
    this.size = size;
    this.temperature = temperature;
  }
  drink() {
    if (this.temperature !== "scalding") {
      console.log("now drinking");
    }
  }
}

// If a derived class has its own version of a method defined in its
// parent, the derived class's own method is used. The derived class
// method overrides the parent method
class Coffee extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
  drink() {
    if (this.temperature != "scalding") {
      console.log("now drinking coffee");
    }
  }
}

// Properties created in a class are also known as fields. Fields &
// methods are both called features of a class or members of the class.
// The same way methods in a class are defined without the "function"
// keyword, fields in a class are defined without using var, let or
// const keyword.
class MyClass {
  publicField = "this is a public field";
}

// It's a good practice to first define all class fields in the class
// before the constructor. Makes code clean & helps document class.
class Cat {
  paws = 4;
  sound = "meow";
  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }
}

// When you define members (methods or fields) outside of the constructor
// they are added to the instance before the constructor runs, which
// means that you can access them from within the constructor.

// Public members
// they can be accessed by code outside the class as opposed to private
// members that are accessed only from within the class.
// By default members of a class are public, you don't have to do anything
// special to declare them.
// Public class members exist on every instance of a class you create.
// In a derived class, public members that belong to the parent class
// are added when super() is called - which is why super() must always
// be the first statement in a constructor of a derived class.

// Private members
// Invisible to the world outside the class. To make a member private,
// preface the name of the property or method with the number sign #.
class Cat {
  #isSleeping;
  paws = 4;
  sound = "meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }
  #takeNap() {
    this.#isSleeping = true;
  }
}

// Static members
// The static keyword creates a method or property that can't be called
// on instances of the class - only on the class itself. Static methods
// are commonly used for utilities, and static properties are useful
// for caches and other class-level data.
class Cat {
  static species = "Felis catus";
  #isSleeping;
  paws = 4;
  sound = "meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }
  static herd() {
    throw new Error(`You can't do that.`);
  }
  #takeNap() {
    this.#isSleeping = true;
  }
}

// in the above example, both the species property and herd() method
// are public. Private fields can be static as well.
