// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*()";
  var length = prompt("Input length of password between 8-128");
  var lower = confirm("Include lowercase?");
  var upper = confirm("Include uppercase?");
  var numberInclude = confirm("Include numbers?");
  var symbolInclude = confirm("Include symbols?");
  var possibleChars = "";


  if (lower) {
   var password =+ lowerCase.charAt(Math.floor(Math.random() 
    * lowerCase.length + 1)); 
    possibleChars += lowerCase
  
  }
  if (upper) {
    var password =+ upperCase.charAt(Math.floor(Math.random() 
     * upperCase.length + 1)); 
     possibleChars += upperCase
   
   }
   if (numberInclude) {
    var password =+ numbers.charAt(Math.floor(Math.random() 
     * numbers.length + 1)); 
     possibleChars += numbers
   
   }
   if (symbolInclude) {
    var password =+ symbols.charAt(Math.floor(Math.random() 
     * symbols.length + 1)); 
     possibleChars += symbols
   
   }

   var characterNeed = length - password.length;

   for (i = 0; i < characterNeed; i++) {
     
   }

   
}






  // click generate password
  // box prompt- enter length password 
  // box prompt to select yes for parameters
  // password should generate 