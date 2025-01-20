{/*Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

807.304 --> "800 + 7 + 3/10 + 4/1000"
  1.24  --> "1 + 2/10 + 4/100"
  7.304 --> "7 + 3/10 w+ 4/1000"
  0.04  --> "4/100" */}

  function expandedForm(num) {
    // Your code here
    let [a,b] = num.toString().split(".")
    let x = a.split("").map((s,r,arr)=>s*Math.pow(10,arr.length-r-1)).filter(q=>q>0).map(z=>z.toString())
    let y = b ? b.split("").map((f,g)=>`${f}/${Math.pow(10,g+1)}`).filter(h=>!h.startsWith("0")) : []
    return [...x, ...y].join(" + ");
  }
