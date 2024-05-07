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
    this.classList.toggle('bi-eye');
});