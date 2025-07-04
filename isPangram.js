{
  /*A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */
}

function isPangram(string) {
  let strng = string.toLowerCase();

  let result = new Set();

  for (let char of strng) {
    if (char >= "a" && char <= "z") {
      result.add(char);
    }
  }
  return result.size === 26;
}

// OR
function isPangram(string) {
  const letters = new Set(string.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
}

// OR

function isPangram(string) {
  const lowerStr = string.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...alphabet].every((letter) => lowerStr.includes(letter));
}

// OR
function isPangram(string) {
  const freq = {};
  const lowerStr = string.toLowerCase();

  for (let char of lowerStr) {
    if (char >= "a" && char <= "z") {
      freq[char] = true;
    }
  }

  return Object.keys(freq).length === 26;
}
