// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25){
      return false 
    }
  const inputString = input.toLowerCase(); // to make input to lowercase
  const stringArray = inputString.split(''); // to split string 

  let newString = []; //initializing empty array

 for (const string of stringArray){ //iterate through input string
  const stringLetters = [...string]; 
  let newSubstring = "";
  for (const letters of stringLetters){
    if (letters == " "){
      newSubstring += " ";
      continue
    }
    if (!alphabet.includes(letters)){
      newSubstring += letters;
      continue
    }
    let indexLetters = alphabet.indexOf(letters) + (encode ? shift : -shift); //get index of alphabet and shift letters appropriatly 
  if (indexLetters > 25){
    indexLetters = indexLetters - 26;
  } else if (indexLetters < 0){
    indexLetters = indexLetters + 26;
    
  }
 newSubstring += alphabet[indexLetters];
  }
  newString.push(newSubstring);

 }
newString = newString.join("");
return newString

}

return {
    caesar,
  };
})();

module.exports = {caesar: caesarModule.caesar }
