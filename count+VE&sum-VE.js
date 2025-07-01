{
  /*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/
}

function countPositivesSumNegatives(input) {
  // your code here
  if (!input || input.length === 0) return [];
  let x = 0;
  let y = 0;
  for (let num of input) {
    if (num > 0) {
      x++;
    } else if (num < 0) {
      y += num;
    }
  }
  return [x, y];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

// OR

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  return input.reduce(
    ([pos, neg], num) => {
      if (num > 0) pos++;
      else if (num < 0) neg += num;
      return [pos, neg];
    },
    [0, 0]
  );
}
