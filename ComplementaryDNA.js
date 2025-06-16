{
  /*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"*/
}

function dnaStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    }
  }
  return result;
}

// OR

function dnaStrand(dna) {
  const complements = { A: "T", T: "A", C: "G", G: "C" };
  return [...dna].map((base) => complements[base]).join("");
}

// OR

function dnaStrand(dna) {
  return dna.replace(/./g, (base) => {
    switch (base) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
    }
  });
}

// OR

function dnaStrand(dna) {
  const complements = { A: "T", T: "A", C: "G", G: "C" };
  return [...dna].reduce((result, base) => result + complements[base], "");
}

// OR

function dnaStrand(dna) {
  let result = "";
  for (const base of dna) {
    if (base === "A") result += "T";
    else if (base === "T") result += "A";
    else if (base === "C") result += "G";
    else if (base === "G") result += "C";
  }
  return result;
}

// OR

const dnaStrand = (dna) =>
  [...dna].map((base) => ({ A: "T", T: "A", C: "G", G: "C" }[base])).join("");

// OR

function dnaStrand(dna) {
  const complements = { A: "T", T: "A", C: "G", G: "C" };
  return dna.replace(/[ATCG]/g, (base) => complements[base]);
}

// OR

function dnaStrand(dna) {
  return [...dna].reduce(
    (acc, base) =>
      acc +
      (base === "A" ? "T" : base === "T" ? "A" : base === "C" ? "G" : "C"),
    ""
  );
}
