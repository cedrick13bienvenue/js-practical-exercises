{
  /*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/
}

function accum(s) {
  return split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

// OR

function accum(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let newChar = char.toUpperCase();

    for (let j = 0; j < i; j++) {
      newChar += char.toLowerCase();
    }
    result += newChar;

    if (i < s.length - 1) {
      result += "-";
    }
  }
  return result;
}

// OR

function accum(s) {
  let result = [];
  let index = 0;

  for (let char of s) {
    let repeated = char.toUpperCase() + char.toLowerCase().repeat(index);
    result.push(repeated);
    index++;
  }

  return result.join("-");
}

// OR
function accum(s) {
  return s
    .split("") // Split the string into an array of letters
    .map((char, index) => {
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join("-");
}

// OR

function accum(s) {
  return s.split("").reduce((acc, char, i) => {
    let part = char.toUpperCase() + char.toLowerCase().repeat(i);
    return acc + (acc ? "-" : "") + part;
  }, "");
}
