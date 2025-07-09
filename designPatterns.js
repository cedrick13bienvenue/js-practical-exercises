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
