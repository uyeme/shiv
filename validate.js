function validateForm(){
    let valid = true;

document.getElementById('nameError').innerHTML = ''
document.getElementById('emailError').innerHTML = ''
document.getElementById('passwordError').innerHTML = ''
document.getElementById('repeatpasswordError').innerHTML = ''
document.getElementById('ageError').innerHTML = ''
document.getElementById('checkboxError').innerHTML = ''


let name = document.getElementById('name').value;
if(name ===""){
    document.getElementById('nameError').innerHTML = 'Name required.'
    valid = false;
}

let email = document.getElementById('email').value;
if(email ===""){
    document.getElementById('emailError').innerHTML = 'Email required.'
    valid = false;
}

let password = document.getElementById('password').value;
if(password ===""){
    document.getElementById('passwordError').innerHTML = 'Password required.'
    valid = false;
}else if(password.lenght < 8){
    document.getElementById('passwordError').innerHTML = ' Password must be at least 8 characters long.'
    valid = false;
}

let repeatpassword = document.getElementById('repeatpassword').value;
if(repeatpassword ===""){
    document.getElementById('repeatpasswordError').innerHTML = 'Confirm Password.'
    valid = false;
}else if(repeatpassword != password){
    document.getElementById('repeatpasswordError').innerHTML = 'Password Mismatch '
}

let age = document.getElementById('age').value;
if(age ===""){
    document.getElementById('ageError').innerHTML = ' Age Name required.'
    valid = false;
} else if (isNaN(age) || age < 18){
    document.getElementById('ageError').innerHTML = 'Age must be a number not less than 18'
    valid = false;
}

let checkbox = document.getElementById('terms');
if (!checkbox.checked) {
    document.getElementById('checkboxError').innerHTML = 'Accept Terms and Conditions.';
    valid = false;
}

return valid
}