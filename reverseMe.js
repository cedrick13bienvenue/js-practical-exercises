// Write a function which returns a reversed string

String.prototype.reverseMe = function(){
    let result=""
    for(let i = this.length-1;i>=0;i--){
         result+=this[i]
    }
    return result
}

