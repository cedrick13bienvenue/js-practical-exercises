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

// Inverted Triangle

function inverted(z){
    let result = ""
    for(let a=z;a>0;a--){
        result+="*".repeat(a)+"\n"
    }
    return result
}

// A Centered Triangle

function centered(q){
    let result = ""
    for(let c=1;c<=q;c++){
        let spaces = " ".repeat(q-c)
        let stars = "*".repeat(2*c-1)
        result += spaces+stars+"\n"
    }
    return result
}


// Reversed Triangle

function reversed(m){
    
    let display= ""

    for(let y=0;y<m;y++){
        let space = " ".repeat(m-y)
        let hashes = "#".repeat(y)
        display += space+hashes+"\n"
    }
    return display
}