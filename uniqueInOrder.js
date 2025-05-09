{
  /*Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next to each other 
and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/
}

var uniqueInOrder = function (iterable) {
  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (i === 0 || iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};

// OR

function uniqueInOrder(iterable) {
  return [...iterable].filter((a, b) => b === 0 || a !== iterable[b - 1]);
}

// OR

function uniqueInOrder(iterable) {
  let result = [];
  let prev = undefined;

  for (let item of iterable) {
    if (item !== prev) {
      result.push(item);
      prev = item;
    }
  }

  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]

// OR

function uniqueInOrder(iterable) {
  return [...iterable].reduce((acc, current) => {
    if (acc.length === 0 || acc[acc.length - 1] !== current) {
      acc.push(current);
    }
    return acc;
  }, []);
}

// OR

function uniqueInOrder(iterable, index = 0, prev = null, result = []) {
  if (index >= iterable.length) return result;
  if (iterable[index] !== prev) result.push(iterable[index]);
  return uniqueInOrder(iterable, index + 1, iterable[index], result);
}

// OR

function uniqueInOrder(str) {
  return typeof str === "string"
    ? str.match(/(.)\1*/g).map((s) => s[0])
    : str.filter((val, i) => i === 0 || val !== str[i - 1]);
}
