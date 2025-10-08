const togglePasswordState = document.getElementById("togglePasswordState")
const passwordInput = document.getElementById("password")

const togglePasswordState2 = document.getElementById("togglePasswordState2")
const passwordInput2 = document.getElementById("password2")

togglePasswordState.addEventListener("click", function(){
    togglePasswordState.classList.toggle("hidden")
    togglePasswordState.classList.toggle("showing")

    passwordInput.type = passwordInput.type == "password" ? "text" : "password"
})

togglePasswordState2.addEventListener("click", function(){
    togglePasswordState2.classList.toggle("hidden")
    togglePasswordState2.classList.toggle("showing")

    passwordInput2.type = passwordInput2.type == "password" ? "text" : "password"
})

function validateForm() {
    console.log("Form is validated here")
    return true
}