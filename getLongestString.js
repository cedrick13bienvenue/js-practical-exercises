{
  /*Write a function named getLongestString that receives an Array of strings as parameter and returns the longest one.

If the Array is empty, return an empty string.

If there are multiple strings of the same maximum length, return the first one. */
}

function getLongestString(arr) {
  if (arr.length === 0) return ""; // Handle empty array

  let longest = arr[0]; // Assume first string is longest for now

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]; // Found a longer string
    }
    // If equal length, do nothing (keep the first one)
  }

  return longest;
}

// Test cases
console.log(getLongestString(["cat", "zebra", "lion"])); // "zebra"
console.log(getLongestString(["hi", "hello", "hey"])); // "hello"
console.log(getLongestString(["same", "size", "word"])); // "same"
console.log(getLongestString([])); // ""

// OR

function getLongestString(arr) {
  return arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

// OR

function getLongestString(arr) {
  let longest = "";
  for (const str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}
