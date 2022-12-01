// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var upLetters = letters.toUpperCase();
  var numbers = "0123456789"
  var specials = "!#$%&()*+,-./:;<=>?@[]\^_`{|}~"
  var chooseFrom = "";
  var factor = 0;
  
  var passLength = prompt("How long does your password need to be? Enter a number between 8 and 128.");
  
  if ((passLength) < 8 || (passLength) > 128 || isNaN(passLength)){
    alert("Please don't be difficult...");
    generatePassword();
  } 

  var isLowercase = confirm('Would you like to use lowercase?');
  var isUppercase = confirm('Would you like to use uppercase?');  
  var isNumber = confirm('Would you like to use numbers?');
  var isSpecial = confirm('Would you like to use special characters?');
  // factor reflects how many options were selected
  if (isLowercase) {   
    factor++;
  }

  if (isUppercase) {
    factor++; 
  }  
  
  if (isNumber) {
    factor++;
  }

  if (isSpecial) {    
    factor++;
  }
  // Pulls random character from each string and adds it to chooseFrom.
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
  // depending on options selected, adds the randomized characters to chooseFrom string
  if (isLowercase) {
    for (var i = 1; i <= ((passLength / factor) + (passLength % factor)); i++) getRandomLower(i);
  }
  
  if (isUppercase) {
    for (var i = 1; i <= (passLength / factor); i++) getRandomUpper(i);
  }
 
  if (isNumber) {
    for (var i = 1; i <= (passLength / factor); i++) getRandomNumber(i);
  }
 
  if (isSpecial) {
    for (var i = 1; i <= (passLength / factor); i++) getRandomSpecial(i);
  }
 
  // SHUFFLE
  // converts string to array
  var chooseArray = chooseFrom.split("");
  // shuffles array
  function fisherYates(){
    var i = chooseArray.length;
    while (--i > 0) {
       var temp = Math.floor(Math.random() * (i + 1));
       [chooseArray[temp], chooseArray[i]] = [chooseArray[i], chooseArray[temp]];
    }
  }
  
  fisherYates(chooseArray);
  // convert array back to string
  chooseFrom = chooseArray.join("");
  
  if (!isLowercase && !isUppercase && !isNumber && !isSpecial) {
    chooseFrom = "This doesn't feel very secure";
  }

  return chooseFrom;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);