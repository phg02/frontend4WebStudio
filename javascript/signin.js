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
this.classList.toggle('bi-eye');
});



const signIn = document.querySelector('button[type="submit"]');
const regrex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
signIn.addEventListener('click', (e) => {
    const email = document.querySelector('#email').value;
    if(!regrex.test(email)){
        e.preventDefault();
        alert(`Invalid email address ${email    }`);
    }
})