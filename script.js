// Assignment Code

// RULES
// MUST contain at least 8 characters
// Can contain at least one uppercaser letter
// Can contain at least one lowercase letter
// Can contain at least one Number
// Can contain at least one special character (!@#'${%^&*{[()_-<>:;?/\"})

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var number = ['0123456789'];
  var special = ['!@#$%^&*()+=?'];
  var lower = ['abcdefghijklmnopqrstuvwxyz'];
  var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  // Length of the password
  var length = (prompt("How many characters would you like to include?"));

  while (length < 8 || length > 50){

    alert("Password must be between 8-50 characters");

    var length = (prompt("How many characters would you like to include?"));
  }

  // Various character types
  var questionNumber = confirm("Select OK to include numeric character(s)");
  var questionSpecial = confirm("Select OK to include special character(s)");
  var questionLower = confirm("Select OK to include lowercase character(s)");
  var questionUpper = confirm("Select OK to include uppercase character(s)");
  

  // While loop to ensure valid inputs have been selected
  while (questionLower === false && questionUpper === false && questionNumber === false && questionSpecial === false) {

    alert("You must include atleast one parameter");
    var questionNumber = confirm("Select OK to include numeric character(s)");
    var questionSpecial = confirm("Select OK to include special character(s)");
    var questionLower = confirm("Select OK to include lowercase character(s)");
    var questionUpper = confirm("Select OK to include UPPERCASE character(s)");
  }

  // Characters to include in password
  var includedChar = "";
  if (number) {
    includedChar = includedChar.concat(number);
  }
  if (special) {
    includedChar = includedChar.concat(special);
  }
  if (lower) {
    includedChar = includedChar.concat(lower);
  }
  if (upper) {
    includedChar = includedChar.concat(upper);
  }

  // Empty string
  var randomPassword = "";

  // Generate random characters
  for (var i = 0; i < length; i++) {
    randomPassword = randomPassword + includedChar[Math.floor(Math.random() * includedChar.length)];
  }
  return randomPassword;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);