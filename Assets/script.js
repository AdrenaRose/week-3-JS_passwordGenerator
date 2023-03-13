// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = setLength();
  var lowerCase = includeLowercase();
  var upperCase = includeUppercase();
  var numbers = includeNumbers();
  var specialChars = includeSpecialChars();

  //build array

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password = password + "b";
    //is the same thing as password += "b"
  }
  return password;
}

function setLength() {
  do {
    var length = prompt("Choose a number of characters between 8 and 128");
    if (length === null) return null;
    if (!(length > 8 && length < 128))
      alert("Please choose a valid number of characters");
  } while (!(length > 8 && length < 128));
  return length;
}

function includeLowercase() {
  var lowerCase = confirm("Do you want to include lowercase letters?");
  return lowerCase;
}

function includeUppercase() {
  var upperCase = confirm("Do you want to include uppercase letters?");
  return upperCase;
}

function includeNumbers() {
  var numbers = confirm("Do you want to include uppercase letters?");
  return numbers;
}

function includeSpecialChars() {
  var specialChars = confirm("Do you want to include uppercase letters?");
  return specialChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
