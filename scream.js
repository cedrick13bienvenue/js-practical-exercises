// Write a function that takes two parameters: 
// the first is a value to be repeated, and the second is a number representing how many times to repeat it.
// The function returns the repeated value.


const scream  = function(x,y){
    let result=""
    for(let i=0;i<y;i++){
        result+=x
    }
    return result
}