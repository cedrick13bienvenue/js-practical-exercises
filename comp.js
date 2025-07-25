{/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have 
the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
 It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

*/}

function comp(array1,array2){
    if(!array1 || !array2 || array1.length !== array2.length){
        return false
    }
    let arr = array1.map(a=>a*a)
    let s1 = [...arr].sort()
    let s2 = [...arr2].sort()
    return s1.every((x,y)=>x === s2[y])
} 

// Using Frequency Maps

function comp(a, b) {
  if (!a || !b || a.length !== b.length) return false;

  const count = (arr) =>
    arr.reduce((map, val) => {
      map[val] = (map[val] || 0) + 1;
      return map;
    }, {});

  const aSquares = a.map(x => x * x);
  const mapA = count(aSquares);
  const mapB = count(b);

  return Object.keys(mapA).every(key => mapA[key] === mapB[key]);
}

// One-Liner with Sorting
 
const comp = (a, b) =>
  !!a && !!b &&
  a.length === b.length &&
  a.map(x => x ** 2).sort((m, n) => m - n).every((x, i) => x === b.sort((m, n) => m - n)[i]);


// Using Map Object 

function comp(a, b) {
  if (!a || !b || a.length !== b.length) return false;

  const freqMap = (arr) => {
    const map = new Map();
    for (let val of arr) {
      map.set(val, (map.get(val) || 0) + 1);
    }
    return map;
  };

  const aSquared = a.map(x => x * x);
  const mapA = freqMap(aSquared);
  const mapB = freqMap(b);

  for (let [key, val] of mapA.entries()) {
    if (mapB.get(key) !== val) return false;
  }

  return true;
}
