{
  /*Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example

There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type id of the most frequently sighted birds
Input Format

The first line contains an integer, , the size of .
The second line describes  as  space-separated integers, each a type number of the bird sighted.

Constraints

It is guaranteed that each type is , , , , or .
Sample Input 0

6
1 4 4 4 5 3
Sample Output 0

4
Explanation 0

The different types of birds occur in the following frequencies:

Type :  bird
Type :  birds
Type :  bird
Type :  birds
Type :  bird
The type number that occurs at the highest frequency is type , so we print  as our answer.

Sample Input 1

11
1 2 3 4 5 4 3 2 1 3 4
Sample Output 1

3
Explanation 1

The different types of birds occur in the following frequencies:

Type : 
Type : 
Type : 
Type : 
Type : 
Two types have a frequency of , and the lower of those is type .*/
}

function migratoryBirds(arr) {
  // Write your code here
  let store = {};
  for (let char of arr) {
    store[char] = (store[char] || 0) + 1;
  }
  let result = null;
  let frequency = 0;
  for (let x in store) {
    if (store[x] > frequency) {
      frequency = store[x];
      result = x;
    }
  }
  return Number(result);
}

// OR

function migratoryBirds(arr) {
  let store = {};
  for (let char of arr) {
    store[char] = (store[char] || 0) + 1;
  }

  let result = null;
  let frequency = 0;

  for (let x in store) {
    let birdId = Number(x);
    if (store[x] > frequency) {
      frequency = store[x];
      result = birdId;
    } else if (store[x] === frequency && birdId < result) {
      result = birdId;
    }
  }

  return result;
}

// OR

function migratoryBirds(arr) {
  const countMap = new Map();

  arr.forEach((bird) => {
    countMap.set(bird, (countMap.get(bird) || 0) + 1);
  });

  let maxFreq = 0;
  let result = Infinity;

  for (let [bird, count] of countMap) {
    if (count > maxFreq || (count === maxFreq && bird < result)) {
      maxFreq = count;
      result = bird;
    }
  }

  return result;
}

// OR

function migratoryBirds(arr) {
  const counts = {};
  arr.forEach((id) => (counts[id] = (counts[id] || 0) + 1));

  return Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : counts[a] < counts[b] ? b : Math.min(a, b)
  );
}
