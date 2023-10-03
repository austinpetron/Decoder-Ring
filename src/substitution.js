// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope;
 const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !==26) {
      return false
    }
   const newString = [];
   const inputString = input.toLowerCase()
   const stringArray = inputString.split(" ")
 
   for (const string of stringArray){
    const stringLetters = [...string];
    let newSubstring = "";

    for (const letter of stringLetters){
      if (letter == " "){
        newSubstring += " ";
        continue
      }
      if (!standardAlphabet.includes(letter)){
        newSubstring += "a";
        continue
      }
      if (encode){
      const indexLetter = standardAlphabet.indexOf(letter);
      newSubstring += alphabet[indexLetter];
     } else {
      const indexLetter = alphabet.indexOf(letter);
      newSubstring += standardAlphabet[indexLetter];
     }
     
    }
    newString.push(newSubstring);
   
   }
   return newString.join(" ");
 }
 
  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
