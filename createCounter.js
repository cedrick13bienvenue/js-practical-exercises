{
  /*Counter
Your task is to implement a JavaScript function called createCounter that creates a closure to keep track of a counter variable. 
The createCounter function should return another function, which we'll call counterFn.

Each time you invoke the counterFn function, it should increase the counter variable by 1 and return the updated counter value.

Prototype
Implement a simple inheritance chain using prototypes and demonstrate how properties/methods are inherited.
Create a constructor function and add methods to its prototype. Then, create instances of the constructor and observe how they share the methods.
Use the new keyword to create instances of a constructor function and initialize their properties.
Build a custom object using Object.create and set its prototype to a predefined object. Demonstrate how inheritance works in this scenario.
*/
}
function createCounter() {
  let counter = 0;
  return function counterFn() {
    counter++;
    return counter;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// OR

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

const alice = new Person("Alice", 22);
const bob = new Person("Bob", 30);

console.log(alice.greet()); // "Hello, my name is Alice and I'm 22 years old."
console.log(bob.greet()); // "Hello, my name is Bob and I'm 30 years old."

// OR

const animal = {
  sound: "generic sound",
  speak: function () {
    return `I make a ${this.sound}`;
  },
};

const dog = Object.create(animal);
dog.sound = "bark";

console.log(dog.speak()); // "I make a bark"
