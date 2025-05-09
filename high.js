{/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */}

function high(x){
    let words = x.split(" ")
    let highWord = ""
    let score = 0
    words.forEach(word => {
       let text = [...word].reduce((x,y)=>x+(y.charCodeAt(0)-96),0)
       if(text>score){
        score = text
        highWord = word
       }        
    });
    return highWord
}

// OR

function high(x) {
    return x.split(' ').reduce((highest, word) => {
      const score = [...word].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
      const highScore = [...highest].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
      return score > highScore ? word : highest;
    });
  }
  
