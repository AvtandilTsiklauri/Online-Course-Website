function Login(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
    const rememberMe = document.getElementById("remember-me");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const errorDisplay = document.getElementById("auth-error-message");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    errorDisplay.innerText = "";

    const Email = emailInput.value.trim();
    const Password = passwordInput.value;
    let isValidInput = true;

    if (Email === "") {
        isValidInput = false;
        emailError.innerHTML = "Email Cannot Be Blank!";
    } else if (!Email.includes("@")) {
        isValidInput = false;
        emailError.innerHTML = "Please Input A Valid Email!";
    }

    if (Password === "") {
        isValidInput = false;
        passwordError.innerHTML = "Please Enter Your Password!";
    } else if (Password.length < 6) {
        isValidInput = false;
        passwordError.innerHTML = "Password must be at least 6 characters!";
    }
    if (isValidInput) {
        const savedAccount = localStorage.getItem("userAccount");

        if (!savedAccount) {
            errorDisplay.innerText = "No account found. Please sign up first.";
            return;
        }

        const user = JSON.parse(savedAccount);

        if (Email === user.email && Password === user.password) {
            if (rememberMe.checked) {
                localStorage.setItem("rememberedEmail", Email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }
            alert("Login Successful! Welcome back, " + user.firstName);
        } else {
            errorDisplay.innerText = "Incorrect Email Or Password.";
            errorDisplay.style.color = "red";
        }
    }
}
window.onload = function() {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
        const loginEmailField = document.getElementById("login-email");
        const rememberMeField = document.getElementById("remember-me");
        if(loginEmailField) loginEmailField.value = savedEmail;
        if(rememberMeField) rememberMeField.checked = true;
    }
};
function SignUp(event){
    document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(err => err.innerText = "");

    let isValid = true;

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value;
    const confirmPass = document.getElementById("confirm-pass").value;
    
    const existingUser = localStorage.getItem("userAccount");
    if (existingUser) {
        const storedUser = JSON.parse(existingUser);
        if (storedUser.email === email) {
            document.getElementById("email-error").innerText = "This Email Is Already Registered!";
            isValid = false;
        }
    }

    if (firstName === "") {
        document.getElementById("first-name-error").innerText = "First Name Is Required";
        isValid = false;
    }
    if (lastName === "") {
        document.getElementById("last-name-error").innerText = "Last Name Is Required";
        isValid = false;
    }
    if (!email.includes("@")) {
        document.getElementById("email-error").innerText = "Please Enter A Valid Email";
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById("pass-error").innerText = "Password Must Be At Least 6 Characters";
        isValid = false;
    }
    if (password !== confirmPass) {
        document.getElementById("confirm-pass-error").innerText = "Passwords Do Not Match";
        isValid = false;
    }

   if (isValid) {
        const userAccount = {
            email: email,
            password: password,
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value
        };

        localStorage.setItem("userAccount", JSON.stringify(userAccount));
        alert("Success! Your Account Has Been Created. Redirecting To Login...");
        
        window.location.href = "Login.html";
    }
});
}