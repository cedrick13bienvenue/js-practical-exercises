{/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

 */}
 function expandedForm(num){
     let x = num.toString()
     let l = x.length
     return x.split("")
     .map((a,b)=>a*Math.pow(10,l-b-1))
     .filter(z=>z>0).join(" + ")
 }

 // OR 

 function expandedForm(num) {
  const strNum = num.toString();
  const length = strNum.length;
  return Array.from(strNum)
    .map((digit, index) => digit * Math.pow(10, length - index - 1))
    .filter(val => val > 0)
    .join(" + ");
}


// OR 

function expandedForm(num) {
  const strNum = num.toString();
  const length = strNum.length;
  let parts = [];

  for (let i = 0; i < length; i++) {
    const val = strNum[i] * Math.pow(10, length - i - 1);
    if (val > 0) {
      parts.push(val);
    }
  }
  return parts.join(" + ");
}

// OR 

function expandedForm(num) {
  const strNum = num.toString();
  const length = strNum.length;

  return [...strNum]
    .reduce((acc, digit, index) => {
      const val = digit * Math.pow(10, length - index - 1);
      if (val > 0) acc.push(val);
      return acc;
    }, [])
    .join(" + ");
}
