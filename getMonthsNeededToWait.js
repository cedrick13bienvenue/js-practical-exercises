/* 5.getMonthsNeededToWait
Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.

The function should return the number of months we have to wait, to get from the first month to the second one.

Example 1
Input:
index1 = 1
index2 = 3
Output:
2
Explanation
The month with index 1 is February and the month with index 3 is April. So, the number of months needed to wait is 2. */

function getMonthsNeededToWait(index1, index2) {
  // Ensure the indices are within the valid range of months (1 to 12)
  if (index1 < 1 || index1 > 12 || index2 < 1 || index2 > 12) {
    throw new Error("Month indices must be between 1 and 12.");
  }

  // Calculate the difference in months
  let monthsNeeded = index2 - index1;

  // If the result is negative, it means we need to wait until next year
  if (monthsNeeded < 0) {
    monthsNeeded += 12;
  }

  return monthsNeeded;
}

// OR

function getMonthsNeededToWait(index1, index2) {
  return (index2 - index1 + 12) % 12;
}
