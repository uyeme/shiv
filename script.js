document.addEventListener('DOMContentLoaded', () => {
    // Get elements for form display toggle
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const goToSignUpLink = document.getElementById('goToSignUp');
    const goToSignInLink = document.getElementById('goToSignIn');

    // Initially hide both forms
    hideForms();

    // Event listeners for buttons
    loginBtn.addEventListener('click', () => toggleForm(signInForm));
    registerBtn.addEventListener('click', () => toggleForm(signUpForm));
    goToSignUpLink.addEventListener('click', (e) => switchForm(e, signUpForm));
    goToSignInLink.addEventListener('click', (e) => switchForm(e, signInForm));

    // Validation for sign-up form
    signUpForm.addEventListener('submit', validateSignUp);

    // Navigation menu toggle
    const navButton = document.getElementById('navButton'); // Add this button in your HTML
    const navMenu = document.getElementById('navmenu');

    navButton.addEventListener('click', () => {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });

    function hideForms() {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'none';
    }

    function toggleForm(form) {
        hideForms();
        form.style.display = 'block';
    }

    function switchForm(event, formToShow) {
        event.preventDefault();
        hideForms();
        formToShow.style.display = 'block';
    }

    function validateSignUp(event) {
        event.preventDefault(); // Prevent form submission for validation
        clearErrors(signUpForm);
        let isValid = true;

        const emailField = signUpForm.querySelector('input[type="email"]');
        const passwordField = signUpForm.querySelector('input[type="password"][placeholder="Password"]');
        const confirmPasswordField = signUpForm.querySelector('input[type="password"][placeholder="Confirm Password"]');
        const ageField = signUpForm.querySelector('input[type="number"]');
        const termsCheckbox = signUpForm.querySelector('#terms');

        // Validate email
        if (!validateRequired(emailField)) isValid = false;
        if (!validateEmail(emailField)) isValid = false;

        // Validate password
        if (!validateRequired(passwordField)) isValid = false;
        if (!validatePasswordLength(passwordField)) isValid = false;

        // Validate confirm password
        if (!validateRequired(confirmPasswordField)) isValid = false;
        if (!validatePasswordMatch(passwordField, confirmPasswordField)) isValid = false;

        // Validate age
        if (!validateRequired(ageField)) isValid = false;
        if (!validateAge(ageField)) isValid = false;

        // Validate terms checkbox
        if (!validateTerms(termsCheckbox)) isValid = false;

        // If form is valid, allow submission
        if (isValid) {
            signUpForm.submit(); // Submit the form
        }
    }

    // Validation functions
    function validateRequired(input) {
        if (!input.value.trim()) {
            displayError(input, 'This field is required.');
            return false;
        }
        return true;
    }

    function validateEmail(input) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
            displayError(input, 'Please enter a valid email (e.g., user@example.com).');
            return false;
        }
        return true;
    }

    function validatePasswordLength(input) {
        if (input.value.length < 8) {
            return { isValid: false, message: "Password must be at least 8 characters long." };
        }
        return { isValid: true, message: "Password length is valid." };
    }

    function validatePasswordMatch(passwordField, confirmPasswordField) {
        if (confirmPasswordField.value !== passwordField.value) {
            displayError(confirmPasswordField, 'Passwords do not match.');
            return false;
        }
        return true;
    }

    function validateInput(input, i) {
        if (Number(input.value) < 18 || Number(i) > 65) {
            return false; // or any specific handling
        }
        return true;
    }

    function validateTerms(input) {
        if (!input.checked) {
            displayError(input, 'You must agree to the terms and conditions.');
            return false;
        }
        return true;
    }

    function clearErrors(form) {
        const errorElements = form.querySelectorAll('.error-message');
        errorElements.forEach(element => element.remove());
    }

    function displayError(inputField, message) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        inputField.parentNode.appendChild(errorMessage);
        inputField.setAttribute('aria-describedby', errorMessage.id);
    }
});
