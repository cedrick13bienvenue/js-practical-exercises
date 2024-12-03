// Right-Angled Triangle

function makeLine(num){
    var line = ""
    for(var j=1;j<=num;j++){
        line+="*"
    }
    return line+"\n"
}
function build(n){
    var answer=""
    for(let i=1;i<=n;i++){
        answer+=makeLine(i)
    }
    return answer
}

// Reversed Triangle

function reversed(z){
    let result = ""
    for(let a=z;a>0;a--){
        result+="*".repeat(a)+"\n"
    }
    return result
}
