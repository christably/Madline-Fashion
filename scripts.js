document.addEventListener('DOMContentLoaded', function() {
    var logForm = document.getElementById("loginForm");
    var regForm = document.getElementById("registerForm");
    var remLog = document.getElementById("removeLog");
    var remReg = document.getElementById("removeReg");

    function login() {
        remLog.style.display = "none";
        remReg.style.display = "block";
        logForm.style.display = "flex";
        regForm.style.display = "none";
    }

    function register() {
        if (validateForm()) {
            remReg.style.display = "none";
            remLog.style.display = "block";
            regForm.style.display = "flex";
            logForm.style.display = "none";
            // Additional logic after successful registration
            console.log("Registration successful");
        }
    }

    function validateForm() {
        var userName = document.getElementById("userName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        if (!userName || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return false;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one capital letter and one number.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        var verificationCode = prompt("Verification Code sent to your email. Enter code:");

        if (!verificationCode) {
            alert("Verification code is required.");
            return false;
        }

        // If all checks pass, return true
        return true;
    }

    document.getElementById("removeLog").addEventListener("click", login);
    document.getElementById("removeReg").addEventListener("click", register);

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Add login logic if needed
        console.log("Login form submitted");
    });

    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        register(); // Call the register function to handle registration logic
    });
});
