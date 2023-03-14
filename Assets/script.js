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
  if (passwordLength === null) return "";
  var lowerCase = includeLowercase();
  var upperCase = includeUppercase();
  var numbers = includeNumbers();
  var specialChars = includeSpecialChars();
  var uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  var characterPool = [];
  if (lowerCase == true) {
    characterPool = characterPool.concat(lowercaseLetters);
  }
  if (upperCase == true) {
    characterPool = characterPool.concat(uppercaseLetters);
  }
  if (numbers == true) {
    characterPool = characterPool.concat(nums);
  }
  if (specialChars == true) {
    characterPool = characterPool.concat(characters);
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password =
      password +
      characterPool[Math.floor(Math.random() * characterPool.length)];
  }
  return password;
}

function setLength() {
  do {
    var length = prompt("Choose a number of characters between 8 and 128");
    if (length === null) return null;
    if (!(length >= 8 && length <= 128))
      alert("Please choose a valid number of characters");
  } while (!(length >= 8 && length <= 128));
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
  var numbers = confirm("Do you want to include numbers?");
  return numbers;
}

function includeSpecialChars() {
  var specialChars = confirm("Do you want to include special characters?");
  return specialChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
