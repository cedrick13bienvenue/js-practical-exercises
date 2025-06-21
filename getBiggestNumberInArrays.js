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
