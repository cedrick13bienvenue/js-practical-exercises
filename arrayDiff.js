{
  /*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
}

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

// OR

function arrayDiff(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      // not found in b
      result.push(a[i]);
    }
  }

  return result;
}

// OR

function arrayDiff(a, b) {
  const bSet = new Set(b);
  return a.filter((x) => !bSet.has(x));
}

// OR

function arrayDiff(a, b) {
  return a.reduce((acc, val) => {
    if (!b.includes(val)) acc.push(val);
    return acc;
  }, []);
}
