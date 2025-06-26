/* 7.lastNRevert
Write a function named lastNRevert that receives 2 parameters:

a string named text
a number - n
and returns the last n characters of text but in reverse order.


Example 1
Input: 
text = "T-shirts", n=4
Output: 
"stri"

Explanation
Last 4 characters are irts and their reversed order is stri. */

function lastNRevert(text, n) {
  if (n <= 0 || n > text.length) {
    return "";
  }

  const lastNChars = text.slice(-n);
  return lastNChars.split("").reverse().join("");
}

// OR

const lastNRevert = (text, n) =>
  n > 0 && n <= text.length ? [...text.slice(-n)].reverse().join("") : "";
