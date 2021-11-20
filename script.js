// Assignment Code
var generateBtn = document.querySelector("#generate");

// create list of all characters

var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charSpecial = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
var charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var userPassword = ""
// Confirm requirements from user
function generatePassword() {
  var passwordPool = [];


  var passwordLength = parseInt(prompt("How many characters (8-128) would you like your password to contain?"));

  if (passwordLength < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }

  if (passwordLength > 128) {
    alert('The password must be less than 128 characters!');
    return;
  }

  var confirmUppercase = confirm("Do you want to include uppercase characters?");
  if (confirmUppercase === true) {
    passwordPool = passwordPool.concat(charUpper);
    userPassword = userPassword + charUpper[Math.floor(Math.random() * charUpper.length)];

  }

  var confirmLowercase = confirm("Do you want to include lowercase characters?");
  if (confirmLowercase === true) {
    passwordPool = passwordPool.concat(charLower);
    userPassword = userPassword + charLower[Math.floor(Math.random() * charLower.length)];
  }

  var confirmSpecial = confirm("Do you want to include special characters?");
  if (confirmSpecial === true) {
    passwordPool = passwordPool.concat(charSpecial);
    userPassword = userPassword + charSpecial[Math.floor(Math.random() * charSpecial.length)];
  }

  var confirmNumbers = confirm("Do you want to include numeric characters?");
  if (confirmNumbers === true) {
    passwordPool = passwordPool.concat(charNumber);
    userPassword = userPassword + charNumber[Math.floor(Math.random() * charNumber.length)];
  }

  if (!confirmLowercase || !confirmUppercase || !confirmNumbers || !confirmSpecial) {
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
    return;
  }


  for (var i = 4; i < passwordLength; i++) {
    userPassword = userPassword + passwordPool[Math.floor(Math.random() * passwordPool.length)];
    console.log(userPassword);
  }

  var questionOptions = {
    passwordLength: passwordLength,
    specialCharacters: confirmSpecial,
    charNumber: confirmNumbers,
    lowerCase: confirmLowercase,
    upperCase: confirmUppercase,
    passwordPool: passwordPool,};
  console.log(userPassword);
  console.log(questionOptions);

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);