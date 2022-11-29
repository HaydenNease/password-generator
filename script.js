// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var upLetters = letters.toUpperCase();
  var numbers = "0123456789"
  var specials = "!#$%&()*+,-./:;<=>?@[]\^_`{|}~"
  var chooseFrom = "";
  // YOUR CODE GOES HERE
  var isLowercase = confirm('Would you like to use lowercase?');
  var isUppercase = confirm('Would you like to use uppercase?');  
  var isNumber = confirm('Would you like to use numbers?');
  var isSpecial = confirm('Would you like to use special characters?');

  if (isLowercase) {
    // USE LOWERCASE LETTERS
    console.log('lowercase')
  }

  if (isUppercase) {
    // USE UPPERCASE LETTERS
    console.log('uppercase')
  }  
  
  if (isNumber) {
    // USE NUMBERS
    console.log('number')
  }

  if (isSpecial) {
    // USE SPECIAL CHARACTERS
    console.log('special')
  }

  chooseFrom += numbers
  chooseFrom += specials

  // GRAB RANDOM LETTERS

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);