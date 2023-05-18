// Assignment code here

// Character types are displayed below.
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var likelyCharacters = [];
  
    // User input validation
    passwordLength = prompt("How long would you like the length of your password to be? (Must be 8 - 128 characters in length)");
    if (passwordLength < 8 || passwordLength > 128) {
      return "Please select a password length between 8 - 128 numbers."; // modified the validation message.
    } else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + passwordLength + " characters long.");
      
    }
  
    includeLowercase = confirm("Do you want lowercase letters?");
    if (includeLowercase) {
      alert("Your password will have lowercase letters.");
    }
    else {
      alert("Your password will NOT have lowercase letters.");
    }
  
    includeUppercase = confirm("Do you want uppercase letters?");
    if (includeUppercase) {
      alert("Your password will have uppercase letters.");
    }
    else {
      alert("Your password will NOT have uppercase letters.");
    }
  
    includeNumbers = confirm("Do you want numbers included in your password?");
    if (includeNumbers) {
      alert("Your password will have numbers.");
    }
    else {
      alert("Your password will NOT have numbers.");
    }
  
    includeSpecial = confirm("Do you want special characters included in your password?");
    if (includeSpecial) {
      alert("Your password will have special characters.");
    }
    else {
      alert("Your password will NOT have special characters.");
    }
  
    if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
      return "Please select at least one character type.";
    };
  
    // Combination of selected characters
    if (includeLowercase) {
      likelyCharacters = likelyCharacters.concat(lowercaseLetters);
    }
    if (includeUppercase) {
      likelyCharacters = likelyCharacters.concat(uppercaseLetters);
    }
    if (includeNumbers) {
      likelyCharacters = likelyCharacters.concat(numbers);
    }
    if (includeSpecial) {
      likelyCharacters = likelyCharacters.concat(specialCharacters);
    }
  
    // pick random cards out of new pool for length of password
    let endingPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      let rng =[Math.floor(Math.random() * likelyCharacters.length)];
      endingPassword = endingPassword + likelyCharacters[rng];
    }
    return endingPassword;
  };
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);