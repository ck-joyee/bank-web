// Step-1: add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

// step-2: get the email address inside the email input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;

// Step-3: get the password address inside the password input field

   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
  
//  Varify email and password
    if(email === 'joyee@gmail.com' && password === 'joyee'){
        window.location.href = 'bank.html';
    } 
    else{
        alert('Invalid User')
    } 
})