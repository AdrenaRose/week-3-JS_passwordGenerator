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
  //lowercase
  //uppercase
  //numbers
  //specialChars
  
  //build array

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password = password + "b";
    //could also be password += "b"
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


// if (lowerCase == "yes") {
//   console.log("Include lowercase letters");
// }

// passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Store variables in passwordText (document.querySelector #password)

//When the user clicks generate password, they are prompted with:
//Number of characters you would like your password to be (between 8 and 128)
//  Do you want to include lowercase characters?
// Do you want to include uppercase?
// Do you want to include numbers?
// Do you want to include special characters?

//If password.Length <== 8 && password.Length >== 128, then prompt next question
// else alert Please choose a valid number of characters.
//If user clicks yes, then assign value to variable
// else prompt next question (3 times, 4th time would return password displayed on screen) - so this is a loop

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
