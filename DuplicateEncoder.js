
{/*The goal of this exercise is to convert a string to a new string where each character in the new string is
 "(" if that character appears only once in the original string, or ")" 
 if that character appears more than once in the original string. 
 Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/}

function duplicateEncoder(word){
    let newWord = word.toLowerCase()
    let frequency = {

    }
    for(let char of newWord){
      frequency[char] = (frequency[char]||0)+1
    }
    let result = ""
    for(let char of newWord){
        result += frequency[char]>1 ? ")" : "("
    }
    return result
}

// OR

function duplicateEncoder(word){
    let newWord = word.toLowerCase()
    let frequency = {}
    for(let char of newWord){
        if(frequency[char]){
            frequency[char]+=1
        }else{
            frequency[char]=1
        }
    }
    let result = ""
    for(let char of newWord){
        if(frequency[char]>1){
            result+=")"
        }else{
            result+="("
        }
    }
    return result
}
