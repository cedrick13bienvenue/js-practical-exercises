/* There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example


There are two numbers between the arrays:  and .
, ,  and  for the first value.
,  and ,  for the second value. Return .

Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

int a[n]: an array of integers
int b[m]: an array of integers
Returns

int: the number of integers that are between the sets
Input Format

The first line contains two space-separated integers,  and , the number of elements in arrays  and .
The second line contains  distinct space-separated integers  where .
The third line contains  distinct space-separated integers  where .

Constraints

Sample Input

2 3
2 4
16 32 96
Sample Output

3
Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b. */

function getTotalX(a, b) {
  // Function to find LCM of two numbers
  function lcm(x, y) {
    return (x * y) / gcd(x, y);
  }

  // Function to find GCD of two numbers
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  // Find LCM of array A
  let lcmA = a.reduce((acc, num) => lcm(acc, num), a[0]);

  // Find GCD of array B
  let gcdB = b.reduce((acc, num) => gcd(acc, num), b[0]);

  // Count numbers between LCM(A) and GCD(B)
  let count = 0;

  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(getTotalX([2, 4], [16, 32, 96])); // Output: 3

// OR

function getTotalX(a, b) {
  function isFactorOfAll(n, arr) {
    return arr.every((x) => x % n === 0);
  }

  function isMultipleOfAll(n, arr) {
    return arr.every((x) => n % x === 0);
  }

  let count = 0;

  for (let i = Math.max(...a); i <= Math.min(...b); i++) {
    if (isMultipleOfAll(i, a) && isFactorOfAll(i, b)) {
      count++;
    }
  }

  return count;
}

console.log(getTotalX([2, 4], [16, 32, 96])); // Output: 3

// OR

function getTotalX(a, b) {
  const max = Math.min(...b);
  const min = Math.max(...a);

  const candidates = [];
  for (let i = min; i <= max; i++) {
    candidates.push(i);
  }

  return candidates.filter(
    (n) => a.every((x) => n % x === 0) && b.every((x) => x % n === 0)
  ).length;
}

// OR

function getTotalX(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const lcm = (x, y) => (x * y) / gcd(x, y);

  const lcmA = a.reduce(lcm);
  const gcdB = b.reduce(gcd);

  return Array.from(
    { length: Math.floor(gcdB / lcmA) },
    (_, i) => lcmA * (i + 1)
  ).filter((x) => gcdB % x === 0).length;
}

// OR

function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}

function getMultiples(num, limit) {
  let multiples = [];
  for (let i = num; i <= limit; i += num) {
    multiples.push(i);
  }
  return multiples;
}

function getTotalX(a, b) {
  let lcmA = a.reduce((acc, val) => (acc * val) / gcd(acc, val));
  let gcdB = b.reduce((acc, val) => gcd(acc, val));

  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }

  const valid = getMultiples(lcmA, gcdB).filter((x) => gcdB % x === 0);
  return valid.length;
}
