// Get references to login form, signup form, and buttons to switch between them
const loginForm = document.getElementById('loginForm'); // Reference to login form
const signupForm = document.getElementById('signupForm'); 
const showSignupBtn = document.getElementById('showSignup'); 
const showLoginBtn = document.getElementById('showLogin');

// Event listener to switch to signup form when the 'Sign Up' button is clicked
showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden'); // Hide login form
    signupForm.classList.remove('hidden'); // Show signup form
});

// Event listener to switch to login form when the 'Sign In' button is clicked
showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden'); // Show login form
    signupForm.classList.add('hidden'); // Hide signup form
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;

        // Here you can perform validation or send the login credentials to the server for verification
        
        // For demonstration purposes, let's assume the login is successful if the email and password are not empty
        if (email.trim() !== '' && password.trim() !== '') {
            // Redirect to index.html upon successful login
            window.location.href = 'index.html';
        } else {
            // Display error message if email or password is empty
            alert('Please enter both email and password.');
        }
    });
});



let user_records=new Array();
       user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

       if(user_records.some((v)=>{
           return v.email==email
       })){
           alert("Duplicate Data")
       }
       else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password,
        })
        localStorage.setItem("users",JSON.stringify(user_records));   
       }
       

