// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("") // split into characters
    .filter((char) => !vowels.includes(char.toLowerCase())) // remove vowels
    .join(""); // rejoin into string
}

// OR

function disemvowel(str) {
  let answer = "";
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char.toLowerCase())) {
      answer += str[i];
    }
  }
  return answer;
}
