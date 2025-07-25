{
  /*You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button 
it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!). */
}

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let x = 0,
    y = 0;
  for (let direction of walk) {
    if (direction === "n") y++;
    else if (direction === "s") y--;
    else if (direction === "e") x++;
    else if (direction === "w") x--;
  }
  return x === 0 && y === 0;
}

// OR

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0,
    y = 0;
  for (let dir of walk) {
    switch (dir) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
    }
  }
  return x === 0 && y === 0;
}

// OR

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  const [x, y] = walk.reduce(
    ([x, y], dir) => {
      if (dir === "n") return [x, y + 1];
      if (dir === "s") return [x, y - 1];
      if (dir === "e") return [x + 1, y];
      if (dir === "w") return [x - 1, y];
    },
    [0, 0]
  );

  return x === 0 && y === 0;
}

// OR

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  const count = { n: 0, s: 0, e: 0, w: 0 };
  for (let dir of walk) {
    count[dir]++;
  }

  return count["n"] === count["s"] && count["e"] === count["w"];
}
