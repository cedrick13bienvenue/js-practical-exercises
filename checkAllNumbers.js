//Write a function named areAllNumbersEven that receives an Array of numbers
//  as parameter, and returns a boolean indicating if all the numbers are even or not

function areAllNumbersEven(numbers) {
  return numbers.every((num) => num % 2 === 0);
}

// OR

function areAllNumbersEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return false; // As soon as one number is odd, return false
    }
  }
}
