// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var upLetters = letters.toUpperCase();
  var numbers = "0123456789"
  var specials = "!#$%&()*+,-./:;<=>?@[]\^_`{|}~"
  var chooseFrom = "";
  var factor = 0

  // YOUR CODE GOES HERE
  var isLowercase = confirm('Would you like to use lowercase?');
  var isUppercase = confirm('Would you like to use uppercase?');  
  var isNumber = confirm('Would you like to use numbers?');
  var isSpecial = confirm('Would you like to use special characters?');
  var passLength = prompt("Enter password length. 8-128")
  
  function getRandomLower() {
    chooseFrom += letters[Math.floor(Math.random() * letters.length)];    
  }
  function getRandomUpper() {
    chooseFrom += upLetters[Math.floor(Math.random() * upLetters.length)];    
  }
  function getRandomNumber() {
    chooseFrom += numbers[Math.floor(Math.random() * numbers.length)];    
  }
  function getRandomSpecial() {
    chooseFrom += specials[Math.floor(Math.random() * specials.length)];    
  }
  
  // var lowerRandom = Math.floor(Math.random() * letters.length);
  // var lowerPick = letters[lowerRandom];

  if (passLength) {
    console.log(passLength);
  }

  if (isLowercase) {
    // USE LOWERCASE LETTERS
    console.log(getRandomLower());
    factor++;
  }

  if (isUppercase) {
    // USE UPPERCASE LETTERS
    factor++;
    // chooseFrom += upLetters;    
  }  
  
  if (isNumber) {
    factor++;
    // USE NUMBERS
    // chooseFrom += numbers;
  }

  if (isSpecial) {
    // USE SPECIAL CHARACTERS
    factor++;
    // chooseFrom += specials;
  }

  if (isLowercase) {
    for (var i = 1; i < (Math.ceil(passLength / factor)); i++) getRandomLower(i);
    console.log("lower is " + i);
    }
  
  if (isUppercase) {
    for (var i = 1; i <= (passLength / factor); i++) getRandomUpper(i);
    console.log("upper is " + i);
  }
 
  if (isNumber) {
    for (var i = 1; i <= (passLength / factor); i++) getRandomNumber(i);
    console.log("number is " + i);
  }
 
  if (isSpecial) {
    for (var i = 1; i <= (passLength / factor); i++) getRandomSpecial(i);
    console.log("special is " + i);
  }
 


  // GRAB RANDOM LETTERS

  return chooseFrom;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);