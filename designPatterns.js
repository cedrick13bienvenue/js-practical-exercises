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

// 7. Strategy Pattern
// Description: Enables selecting an algorithm at runtime

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function Calculator(strategy) {
  this.calculate = strategy;
}
const calc = new Calculator(add);
console.log(calc.calculate(2, 3));

// 8. Decorator Pattern
// Description: Adds behavior to an object dynamically.

function User(name) {
  this.name = name;
  this.say = () => console.log(`User: ${this.name}`);
}

function DecoratedUser(user, role) {
  user.role = role;
  const oldSay = user.say;
  user.say = () => {
    oldSay.call(user);
    console.log(`Role: ${user.role}`);
  };
  return user;
}

// 9. Mediator Pattern
// Description: Reduces coupling between components by centralizing communication.

class Mediator {
  constructor() {
    this.channels = {};
  }
  subscribe(channel, fn) {
    if (!this.channels[channel]) this.channels[channel] = [];
    this.channels[channel].push(fn);
  }
  publish(channel, data) {
    if (!this.channels[channel]) return;
    this.channels[channel].forEach((fn) => fn(data));
  }
}

// 10. Chain of Responsibility
// Description: Passes requests along a chain until handled.

class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}

// 11. Builder Pattern
// Description: Separates the construction of a complex object from its representation.

class Burger {
  constructor() {
    this.ingredients = [];
  }
  addIngredient(ing) {
    this.ingredients.push(ing);
    return this;
  }
  build() {
    return `Burger with ${this.ingredients.join(", ")}`;
  }
}

// 12. Adapter Pattern
// Description: Converts one interface to another expected by the client.

class OldPrinter {
  printOld(text) {
    console.log(`Old: ${text}`);
  }
}

class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }
  print(text) {
    this.oldPrinter.printOld(text);
  }
}

// 13. Proxy Pattern
// Description: Provides a surrogate or placeholder to control access to another object.

const server = {
  fetchData: () => "Fetched data from server",
};

const proxy = {
  fetchData: () => {
    console.log("Checking cache...");
    return server.fetchData();
  },
};

// 14. Flyweight Pattern
// Description: Minimizes memory usage by sharing data between similar objects.

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const carFactory = (() => {
  const cars = {};
  return {
    getCar(make, model) {
      const key = `${make}_${model}`;
      if (!cars[key]) {
        cars[key] = new Car(make, model);
      }
      return cars[key];
    },
  };
})();

// 15. State Pattern
// Description: Allows an object to alter its behavior when its internal state changes.

class TrafficLight {
  constructor() {
    this.state = "green";
  }
  change() {
    this.state =
      this.state === "green"
        ? "yellow"
        : this.state === "yellow"
        ? "red"
        : "green";
    console.log(`State: ${this.state}`);
  }
}

// 16. Memento Pattern
// Description: Captures and restores an object's internal state.

class Editor {
  constructor() {
    this.content = "";
  }
  write(text) {
    this.content += text;
  }
  save() {
    return this.content;
  }
  restore(content) {
    this.content = content;
  }
}

// 17. Template Pattern
// Description: Defines a base algorithm with customizable steps.

class Meal {
  prepare() {
    this.getIngredients();
    this.cook();
    this.serve();
  }
  getIngredients() {}
  cook() {}
  serve() {
    console.log("Serving meal");
  }
}

// 18. Null Object Pattern
// Description: Uses a non-functional object in place of a null reference.

const NullLogger = {
  log: () => {}, // no operation
};

function process(data, logger = NullLogger) {
  logger.log(data);
}

// 19. Data Access Object (DAO) Pattern
// Description: Provides an abstract interface to some type of database or other persistence mechanism.

class UserDAO {
  constructor() {
    this.users = [];
  }
  add(user) {
    this.users.push(user);
  }
  getAll() {
    return this.users;
  }
}

// 20. Service Locator Pattern
// Description: Provides a centralized registry for retrieving service instances.

class ServiceLocator {
  static services = {};
  static register(name, instance) {
    this.services[name] = instance;
  }
  static get(name) {
    return this.services[name];
  }
}

// 21. Bridge Pattern
// Description: Decouples abstraction from implementation, allowing them to vary independently.

class Device {
  turnOn() {}
  turnOff() {}
}

class RemoteControl {
  constructor(device) {
    this.device = device;
  }
  togglePower() {
    console.log("Power toggled");
  }
}

// 22. Composite Pattern
// Description: Treats individual objects and compositions of objects uniformly.

class Leaf {
  operation() {
    return "Leaf";
  }
}

class Composite {
  constructor() {
    this.children = [];
  }
  add(child) {
    this.children.push(child);
  }
  operation() {
    return this.children.map((c) => c.operation()).join(" + ");
  }
}
