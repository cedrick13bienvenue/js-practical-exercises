{
  /*
Write a function named mostRepetitions that receives 3 parameters:

a string - string1
a string - string2
a letter
and returns the string that has the most occurrences of the specified letter.
 If both have the same number of occurrences return string1. */
}

function mostRepetitions(string1, string2, letter) {
  let frequency = 0;
  let frequency2 = 0;

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === letter) {
      frequency++;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    if (string2[j] === letter) {
      frequency2++;
    }
  }

  if (frequency > frequency2) {
    return string1;
  } else if (frequency2 > frequency) {
    return string2;
  } else {
    return "Equal"; // ✅ or return string1 if you prefer
  }
}
