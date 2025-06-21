// Write a function named getBiggestNumberInArrays that receives 2 parameters:

// an array of numbers named numbers1
// another array of numbers named numbers2
// and returns the maximum number between those 2 arrays.

function getBiggestNumberInArrays(numbers1, numbers2) {
  let max = -Infinity;

  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > max) {
      max = numbers1[i];
    }
  }
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
      max = numbers2[i];
    }
  }
  return max;
}

// OR

function getBiggestNumberInArrays(numbers1, numbers2) {
  const max1 = numbers1.reduce((a, b) => (a > b ? a : b), -Infinity);
  const max2 = numbers2.reduce((a, b) => (a > b ? a : b), -Infinity);
  return max1 > max2 ? max1 : max2;
}

export { getBiggestNumberInArrays };
