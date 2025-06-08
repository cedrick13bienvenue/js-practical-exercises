/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" 
*/

function solution(string) {
    let result = ""
    
    for(let x of string){

      if(x===x.toUpperCase()&&x!==x.toLowerCase()){
        result+=" "+x
      
      }
      else{
        
        result+=x
      }
      
    }
    return result;
  }

  // Using regular expressions

  function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
