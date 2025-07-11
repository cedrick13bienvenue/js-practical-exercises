{
  /*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/
}

String.prototype.JadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// OR

String.prototype.JadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// OR

String.prototype.JadenCase = function () {
  return this.replace(/\b\w/g, (char) => char.toUpperCase());
};

// OR

String.prototype.JadenCase = function () {
  return this.split(" ").reduce((acc, word, i) => {
    const capWord = word.charAt(0).toUpperCase() + word.slice(1);
    return i === 0 ? capWord : acc + " " + capWord;
  }, "");
};

// OR

String.prototype.JadenCase = function () {
  return Array.from(this.split(" "))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
