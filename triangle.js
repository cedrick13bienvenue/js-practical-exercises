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
console.log(build(10))