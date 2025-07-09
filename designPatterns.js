// 1. Singleton Pattern
// Ensures a class has only one instance and provides a global point of access to it.

const Singleton = (function () {
  let instance;
  function createInstance() {
    return { id: Math.random() };
  }
  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

// 2. Factory Pattern
// Description: Creates objects without specifying the exact class of the object to be created.

function CarFactory() {
  this.createCar = function (type) {
    switch (type) {
      case "sedan":
        return { type: "Sedan", wheels: 4 };
      case "truck":
        return { type: "Truck", wheels: 6 };
    }
  };
}

//3. Observer Pattern
// Description: Defines a one-to-many dependency between objects.

class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

//4. Module Pattern
// Description: Encapsulates code using closures to create private/public members.

const CounterModule = (function () {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
})();

// 5. Prototype Pattern
// Description: Allows the creation of objects based on a template (prototype).

const animal = {
  speak: function () {
    console.log(`${this.name} makes a noise.`);
  },
};

const dog = Object.create(animal);
dog.name = "Rex";

// 6. Command Pattern
// Description: Encapsulates a request as an object, allowing parameterization.

function Light() {
  this.on = () => console.log("Light ON");
  this.off = () => console.log("Light OFF");
}

function Command(execute) {
  this.execute = execute;
}

const light = new Light();
const lightOn = new Command(light.on);
lightOn.execute();
