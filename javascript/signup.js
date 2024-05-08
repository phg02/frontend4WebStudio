const togglePassword = document
    .querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {
    // Toggle the type attribute using
    // getAttribure() method
    const type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';
    password.setAttribute('type', type);
    // Toggle the eye and bi-eye icon
    togglePassword.classList.toggle('bi-eye');
    togglePassword.classList.toggle('bi-eye-slash');
});

const togglePassword2 = document
    .querySelector('#togglePassword2');
const password2 = document.querySelector('#confirm-password');
togglePassword2.addEventListener('click', () => {
    // Toggle the type attribute using
    // getAttribure() method
    const type = password2
        .getAttribute('type') === 'password' ?
        'text' : 'password';
    password2.setAttribute('type', type);
    // Toggle the eye and bi-eye icon
    togglePassword2.classList.toggle('bi-eye');
    togglePassword2.classList.toggle('bi-eye-slash');
});


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const consent = document.querySelector('#consent');
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/;
    const numbers = /[0-9]/;
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    let error = false;
    const regrex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let errorList = '';

    if(username.value === '' || username.value === null){
        error = true;
          username.classList.add('error-input');
          username.focus();
          errorList += '<li>Username is required</li>';
    }
    if(email.value === '' || email.value == null){
        error = true;
        email.classList.add('error-input');
        email.focus();
        errorList += '<li>Email is required</li>';
       
    }
    if(regrex.test(email.value) === false){
        error = true;
        email.classList.add('error-input');
        email.focus();
        errorList += '<li>Email is invalid</li>';
    }
    if(password.value === '' || password.value == null){
        error = true;
        password.classList.add('error-input');
        password.focus();
        errorList += '<li>Please enter a password</li>';
        
    }
    if(password.value.length < 8){
        error = true;
        password.classList.add('error-input');
        password.focus();
        errorList += '<li>Password must be at least 8 character</li>';
        
    }
    if(!lowerCaseLetters.test(password.value)){
            console.log('lowercase')
            error = true;
            password.classList.add('error-input');
            password.focus();
            errorList += '<li>Password must contain a lowercase letter</li>';

    }

    if(!upperCaseLetters.test(password.value)){
        console.log('lowercase')
        error = true;
        password.classList.add('error-input');
        password.focus();
        errorList += '<li>Password must contain a uppercase letter</li>';

    }
    if(!numbers.test(password.value)){
        console.log('lowercase')
        error = true;
        password.classList.add('error-input');
        password.focus();
        errorList += '<li>Password must contain a number letter</li>';
    }

    if(!specialCharacters.test(password.value)){
        console.log('lowercase')
        error = true;
        password.classList.add('error-input');
        password.focus();
        errorList += '<li>Password must contain a special character</li>';
    
    }
    if(password.value !== confirmPassword.value){
        error = true;
        password.classList.add('error-input');
        confirmPassword.classList.add('error-input');
        errorList += '<li>Password not match</li>';
    }
    if(!consent.checked){
        error = true;
        password.classList.add('error-input');
        confirmPassword.classList.add('error-input');
        errorList += '<li>Please agree the policy</li>';
    }
    // if(grecaptcha.getResponse(opt_widget_id).length >0){
    //     error = true;
    //     password.classList.add('error-input');
    //     confirmPassword.classList.add('error-input');
    //     errorList += '<li>Please complete the captcha</li>';
    // }
    

    let errors = "<ul>"+errorList+"</ul>";
    if(error == true){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: errors
          });
          e.preventDefault();
          e.stopPropagation();
    }
})
