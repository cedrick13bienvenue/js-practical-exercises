{
  /*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/
}

function countingDuplicates(str) {
  str = str.toLowerCase();
  let store = {};
  for (let char of str) {
    store[char] = (store[char] || 0) + 1;
  }
  const duplicates = Object.values(store).filter((x) => x > 1);
  return duplicates.length;
}

// OR

function countingDuplicates(str) {
  const freq = new Map();
  for (let char of str.toLowerCase()) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  let count = 0;
  for (let val of freq.values()) {
    if (val > 1) count++;
  }
  return count;
}

// OR

function countingDuplicates(str) {
  const freq = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

  return Object.values(freq).filter((x) => x > 1).length;
}

// OR

function countingDuplicates(str) {
  str = str.toLowerCase();
  const seen = new Set();
  const duplicates = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      duplicates.add(char);
    } else {
      seen.add(char);
    }
  }

  return duplicates.size;
}
