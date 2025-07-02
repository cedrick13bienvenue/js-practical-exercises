{
  /*
Write a function named everyNPositions that receives 2 parameters:

a string - message
a number - step
and returns a new string composed of all characters from message that are on positions divisible by step. */
}

function everyNPositions(message, step) {
  let answer = "";
  for (let i = 0; i < message.length; i++) {
    if (i % step === 0) {
      answer += message[i];
    }
  }
  return answer;
}

// OR

function everyNPositions(message, step) {
  return message
    .split("")
    .filter((_, i) => i % step === 0)
    .join("");
}

// OR

function everyNPositions(message, step) {
  let result = "";
  for (let [i, char] of [...message].entries()) {
    if (i % step === 0) result += char;
  }
  return result;
}

// OR

function everyNPositions(message, step, i = 0, result = "") {
  if (i >= message.length) return result;
  return everyNPositions(
    message,
    step,
    i + 1,
    i % step === 0 ? result + message[i] : result
  );
}
