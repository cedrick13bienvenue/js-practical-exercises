{/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/}

function checkVowels(string){
    let vowels = "aioueAIOUE"
    let count = 0
    for(let vowel of string){
        if(vowels.includes(vowel)){
            count++
        }
    }
    return count
}

// OR

function checkVowels(string){
    let vowels = "aioueAIOUE"
    let result = [...string].filter((vowel)=>vowels.includes(vowel))
    return result.length
}