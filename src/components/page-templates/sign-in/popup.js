import './sign-in.sass';

const authorizationButton = document.querySelector('.authorization-button');
const authorizationFormContainer = document.querySelector('.authorization-form-container');
// close buttons
const signInCloseFormElement = document.querySelector('.sign-in__close-form');
const registrationCloseFormElement = document.querySelector('.registration__close-form');
// --
// forms
const signInForm = document.querySelector('.sign-in.form');
const registrationForm = document.querySelector('.registration.form');
// --
// switch buttons
const switchToRegistrationButton = document.querySelector('.switch-to-registration');
const switchToSignIn = document.querySelector('.switch-to-sign-in');
// --

authorizationButton.addEventListener('click', ()=> {
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