/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. 
 */

function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// OR

function sumTwoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((x, y) => x - y);
  return a + b;
}

// OR

function sumTwoSmallestNumbers(numbers) {
  const firstMin = Math.min(...numbers);
  numbers.splice(numbers.indexOf(firstMin), 1);
  const secondMin = Math.min(...numbers);
  return firstMin + secondMin;
}

// OR

function sumTwoSmallestNumbers(numbers) {
  let min1 = Infinity,
    min2 = Infinity;
  for (let num of numbers) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return min1 + min2;
}
