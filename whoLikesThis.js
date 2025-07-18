{
  /* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

*/
}

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// OR

function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// OR

function likes(names) {
  return names.length === 0
    ? "no one likes this"
    : names.length === 1
    ? `${names[0]} likes this`
    : names.length === 2
    ? `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

// OR

function likes(names) {
  const templates = {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
  };
  return (
    templates[names.length] ||
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  );
}

// OR

function likes(names) {
  const [a, b, c] = names;
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${a} likes this`;
    case 2:
      return `${a} and ${b} like this`;
    case 3:
      return `${a}, ${b} and ${c} like this`;
    default:
      return `${a}, ${b} and ${names.length - 2} others like this`;
  }
}
