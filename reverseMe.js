// Write a function which returns a reversed string

String.prototype.reverseMe = function(){
    let result=""
    for(let i = this.length-1;i>=0;i--){
         result+=this[i]
    }
    return result
}

{/*Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */}

 function reverseWords(str) {
    // Go for it
    return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ")
  }

  // OR

function reverseWords(str){
    let result = ""
    let word = ""

    for(let i=0;i<str.length;i++){
        let x = str[i]

        if(x === " "){
            result += reverseWord(word)+ " "
            word = ""
        }else{

            word += x
        }
    }
    result += reverseWord(word)
    return result
}

function reverseWord(word){
    reversed = ""
    for(let i = word.length-1; i>=0; i--){
        reversed += word[i]
    }
    return reversed
}