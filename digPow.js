{/*Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

(a^p + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n * k

Where:
  - a^p is 'a raised to the power of p'
  - b^(p+1) is 'b raised to the power of (p+1)'
  - c^(p+2) is 'c raised to the power of (p+2)'
  - d^(p+3) is 'd raised to the power of (p+3)'
  - n and k are constants or variables

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 */}

function digPow(n, p) {
  // Step 1: Convert the number to a string to get the digits
  const digits = n.toString().split('').map(Number);

  // Step 2: Calculate the sum of digits raised to consecutive powers
  const sum = digits.reduce((total, digit, index) => {
    return total + Math.pow(digit, p + index);
  }, 0);

  // Step 3: Check if the sum is divisible by n
  if (sum % n === 0) {
    return sum / n; // Return k if divisible
  } else {
    return -1; // Return -1 if not divisible
  }
}

// OR

function digPow(n, p) {
  const sum = [...String(n)].reduce((acc, d, i) => acc + d ** (p + i), 0);
  return sum % n ? -1 : sum / n;
}

// OR

function digPow(n, p) {
  let sum = 0;
  let digits = n.toString().split('');

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), p + i);
  }

  if (sum % n === 0) {
    return sum / n;
  }
  return -1;
}
