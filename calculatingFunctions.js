/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); 
*/

function zero(op) {
  return op ? op(0) : 0;
}
function one(op) {
  return op ? op(1) : 1;
}
function two(op) {
  return op ? op(2) : 2;
}
function three(op) {
  return op ? op(3) : 3;
}
function four(op) {
  return op ? op(4) : 4;
}
function five(op) {
  return op ? op(5) : 5;
}
function six(op) {
  return op ? op(6) : 6;
}
function seven(op) {
  return op ? op(7) : 7;
}
function eight(op) {
  return op ? op(8) : 8;
}
function nine(op) {
  return op ? op(9) : 9;
}

function plus(b) {
  return (a) => a + b;
}
function minus(b) {
  return (a) => a - b;
}
function times(b) {
  return (a) => a * b;
}
function dividedBy(b) {
  return (a) => Math.floor(a / b);
}

// Several example usage:

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3

// OR

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const num = (n) => (op) => op ? op(n) : n;

const zero = num(0);
const one = num(1);
const two = num(2);
const three = num(3);
const four = num(4);
const five = num(5);
const six = num(6);
const seven = num(7);
const eight = num(8);
const nine = num(9);

const plus = (b) => (a) => a + b;
const minus = (b) => (a) => a - b;
const times = (b) => (a) => a * b;
const dividedBy = (b) => (a) => Math.floor(a / b);

// OR

function makeNumber(n) {
  return function (op) {
    return op ? op(n) : n;
  };
}

const zero = makeNumber(0);
const one = makeNumber(1);
const two = makeNumber(2);
const three = makeNumber(3);
const four = makeNumber(4);
const five = makeNumber(5);
const six = makeNumber(6);
const seven = makeNumber(7);
const eight = makeNumber(8);
const nine = makeNumber(9);

const plus = (b) => (a) => a + b;
const minus = (b) => (a) => a - b;
const times = (b) => (a) => a * b;
const dividedBy = (b) => (a) => Math.floor(a / b);
