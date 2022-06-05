// Assignment code here
// User input varibles
var clickGeneratePassword;
var selectSymbol;
var selectNumber;
var selectUppercase;
var selectLowercase;

//Values 
// Symbols
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

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
}