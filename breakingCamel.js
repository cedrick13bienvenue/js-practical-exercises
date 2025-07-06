/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" 
*/

function solution(string) {
  let result = "";

  for (let x of string) {
    if (x === x.toUpperCase() && x !== x.toLowerCase()) {
      result += " " + x;
    } else {
      result += x;
    }
  }
  return result;
}

// Using regular expressions

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// Using split() and map()

function solution(string) {
  return string
    .split("")
    .map((char) => {
      return char === char.toUpperCase() && char !== char.toLowerCase()
        ? " " + char
        : char;
    })
    .join("");
}

// Using a for Loop with Index

function solution(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += " " + char;
    } else {
      result += char;
    }
  }
  return result;
}

// Using reduce()

function solution(string) {
  return string.split("").reduce((acc, char) => {
    return (
      acc +
      (char === char.toUpperCase() && char !== char.toLowerCase()
        ? " " + char
        : char)
    );
  }, "");
}

// OR

function solution(string) {
  let result = "";
  for (let x of string) {
    if (x === x.toUpperCase() && x !== x.toLowerCase()) {
      result += " " + x;
    } else {
      result += x;
    }
  }
  return result;
}

// OR

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// OR

function solution(string) {
  return string
    .split("")
    .map((char) => {
      return char === char.toUpperCase() && char !== char.toLowerCase()
        ? " " + char
        : char;
    })
    .join("");
}

// OR

function solution(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    result +=
      char === char.toUpperCase() && char !== char.toLowerCase()
        ? " " + char
        : char;
  }
  return result;
}

// OR

function solution(string) {
  return string.split("").reduce((acc, char) => {
    return (
      acc +
      (char === char.toUpperCase() && char !== char.toLowerCase()
        ? " " + char
        : char)
    );
  }, "");
}
