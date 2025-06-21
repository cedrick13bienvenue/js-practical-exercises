//Write a function named areAllNumbersEven that receives an Array of numbers
//  as parameter, and returns a boolean indicating if all the numbers are even or not

function areAllNumbersEven(numbers) {
  return numbers.every((num) => num % 2 === 0);
}
