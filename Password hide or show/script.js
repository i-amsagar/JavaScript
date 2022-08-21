const passwordInput = document.querySelector("#password_input");
const togglePasswordButton = document.querySelector("#toggle_password");

togglePasswordButton.addEventListener("click", () =>{
    if(passwordInput.type == "password")
    {
        passwordInput.type = "text";
    }
    else if(passwordInput.type == "text")
    {
        passwordInput.type = "password";
    }
});