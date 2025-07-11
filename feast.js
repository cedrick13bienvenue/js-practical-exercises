{
  /*All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
 They will not contain numerals.*/
}

function feast(beast, dish) {
  const x = dish[0];
  const y = beast[0];
  const a = dish[dish.length - 1];
  const b = beast[beast.length - 1];

  if (x === y && a === b) {
    return true;
  } else {
    return false;
  }
}

// OR

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// OR

function feast(beast, dish) {
  const [bFirst, bLast] = [beast[0], beast[beast.length - 1]];
  const [dFirst, dLast] = [dish[0], dish[dish.length - 1]];
  return bFirst === dFirst && bLast === dLast;
}

// OR

function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) && beast.slice(-1) === dish.slice(-1)
  );
}

// OR

function feast(beast, dish) {
  return beast[0] === dish[0] && beast.at(-1) === dish.at(-1) ? true : false;
}
