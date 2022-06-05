// Assignment code here
// User input varibles
var clickGeneratePassword;
var selectSymbol;
var selectNumber;
var selectUppercase;
var selectLowercase;

//Values 
// Symbols
symbols = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","\:","\;","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lowecase Letters
lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Uppercase Letters
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Generate Password
//Function (First prompt)
function generatePassword() {
    clickGeneratePassword = parseInt(prompt("Choose password length between 8 and 128"));
 
    //If nothing is selected
    if (!clickGeneratePassword) {
        alert("Password length required");
    } else if (clickGeneratePassword < 8 || clickGeneratePassword > 128) {

    } else {
        //Remaining prompts 
        selectSymbol = confirm("Do you require special symbols?");
        selectNumber = confirm("Do you require numbers?");
        selectUppercase = confirm("Do you require Uppercase letters?");
        selectLowercase = confirm("Do you requireLowercase letters?");
    };

    // Prompt is if no options are selected 
    if (!selectSymbol && !selectNumber && !selectUppercase && !selectLowercase) {
        options = alert("At least one choice is required!");

    }
    // All options selected
    else if (selectSymbol && selectNumber && selectUppercase && selectLowercase) {

        options = symbols.concat(number, lower, upper);
    }
    // 3 options selected 
    else if (selectSymbol && selectNumber && selectUppercase) {
        options = symbols.concat(number, upper);
    }
    else if (selectSymbol && selectNumber && selectLowercase) {
        options = symbols.concat(number, lower);
    }
    else if (selectSymbol && selectLowercase && selectUppercase) {
        options = symbols.concat(lower, upper);
    }
    else if (selectNumber && selectLowercase && selectUppercase) {
        options = number.concat(lower, upper);
    }
    // 2 options selected
    else if (selectSymbol && selectNumber) {
        options = symbols.concat(number);

    } else if (selectSymbol && selectLowercase) {
        options = symbols.concat(lower);

    } else if (selectSymbol && selectUppercase) {
        options = symbols.concat(upper);
    }
    else if (selectLowercase && selectNumber) {
        options = lower.concat(number);

    } else if (selectLowercase && selectUppercase) {
        options = lower.concat(upper);

    } else if (selectNumber && selectUppercase) {
        options = number.concat(upper);
    }
    // 1 option selected 
    else if (selectSymbol) {
        options = symbols;
    }
    else if (selectNumber) {
        options = number;
    }
    else if (selectUppercase) {
        options = upper;
    }
    else if (selectLowercase) {
        options = lower;
    }
    
// User generated amount of length
var password = [];

// Randomise varibles
for (var i = 0; i < clickGeneratePassword; i++) {
    var selectedOptions = options[Math.floor(Math.random() * options.length)];
    password.push(selectedOptions);
}

//Join selected variables
var securePassword = password.join("");
Input(securePassword);
return securePassword;
}

//Generate password  
function Input(securePassword) {
document.getElementById("password").textContent = securePassword;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



