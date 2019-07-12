import './sign-in.sass';

import placeholderImage from '../../../assets/img/header/avatar-plaseholder.png'



const   openSignInFormButton = document.querySelector('.authorization-button'),
        authorizationFormContainer = document.querySelector('.authorization-form-container'),
        userAvatarImage = document.querySelector('.avatar'),
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
const closeFormElement  = () => {
    authorizationFormContainer.classList.remove('is-active');
    signInForm.classList.remove('is-active');
    registrationForm.classList.remove('is-active');
};
export {closeFormElement};

userAvatarImage.src = placeholderImage;

openSignInFormButton.addEventListener('click', () => {
    authorizationFormContainer.classList.add('is-active');
    signInForm.classList.add('is-active');
});
signInCloseFormElement.addEventListener('click', () =>{
    closeFormElement();
});
registrationCloseFormElement.addEventListener('click', ( )=> {
    authorizationFormContainer.classList.remove('is-active');
    signInForm.classList.remove('is-active');
    registrationForm.classList.remove('is-active');
});
switchToRegistrationButton.addEventListener('click', () => {
    signInForm.classList.remove('is-active');
    registrationForm.classList.add('is-active');
});
switchToSignIn.addEventListener('click', () => {
    signInForm.classList.add('is-active');
    registrationForm.classList.remove('is-active');
});

export { authorizationFormContainer, openSignInFormButton, userAvatarImage }