
let inputElement = document.getElementById("inputElement");
let signInText   = document.getElementById("signInText");

function signIn() {

    let inputValue = inputElement.value;
    let verifyAns = "Hi " + inputValue + ", verifying your account...";
    signInText.textContent = verifyAns;
    signInText.style.color = "red";
    


}