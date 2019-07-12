import './sign-in.sass';

const   openSignInFormButton = document.querySelector('.authorization-button'),
        authorizationFormContainer = document.querySelector('.authorization-form-container'),
        // close buttons
        signInCloseFormElement = document.querySelector('.sign-in__close-form'),
        registrationCloseFormElement = document.querySelector('.registration__close-form'),
        // --
        // forms
        signInForm = document.querySelector('.sign-in.form'),
        registrationForm = document.querySelector('.registration.form'),
        // --
        // switch buttons
        switchToRegistrationButton = document.querySelector('.switch-to-registration'),
        switchToSignIn = document.querySelector('.switch-to-sign-in');
        // --

openSignInFormButton.addEventListener('click', ()=> {
    authorizationFormContainer.classList.add('is-active');
    signInForm.classList.add('is-active');
});
signInCloseFormElement.addEventListener('click', ()=>{
    authorizationFormContainer.classList.remove('is-active')
    signInForm.classList.remove('is-active');
    registrationForm.classList.remove('is-active');
});
registrationCloseFormElement.addEventListener('click', ()=>{
    authorizationFormContainer.classList.remove('is-active')
    signInForm.classList.remove('is-active');
    registrationForm.classList.remove('is-active');
});
switchToRegistrationButton.addEventListener('click', ()=>{
    signInForm.classList.remove('is-active');
    registrationForm.classList.add('is-active');
});
switchToSignIn.addEventListener('click', ()=>{
    signInForm.classList.add('is-active');
    registrationForm.classList.remove('is-active');
});