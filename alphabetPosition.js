{
  /*Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"*/
}

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .map((char) => char.charAtCode(0) - 96)
    .join(" ");
}

// OR

function alphabetPosition(text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      result.push(char.charCodeAt(0) - 96);
    }
  }
  return result.join(" ");
}

// OR

function alphabetPosition(text) {
  return (
    text
      .toLowerCase()
      .match(/[a-z]/g) // match only lowercase letters
      ?.map((char) => char.charCodeAt(0) - 96)
      .join(" ") || ""
  ); // return empty string if no letters
}

// OR

function alphabetPosition(text) {
  let result = "";
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      // if it's a letter a-z
      result += code - 96 + " ";
    }
  }

  return result.trim(); // remove the last space
}

// OR

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}
