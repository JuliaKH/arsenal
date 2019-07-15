const   openSignInFormButton = document.querySelector('.authorization-button'),
        userAvatarImage = document.querySelector('.avatar'),
        // Sign-in
        signInFormContainer = document.querySelector('.sign-in-form-container'),
        signInCloseFormElement = document.querySelector('.sign-in__close-form'),
        switchToRegistrationButton = document.querySelector('.switch-to-registration'),
        // Sign-out
        registrationFormContainer = document.querySelector('.registration-form-container'),
        registrationCloseFormElement = document.querySelector('.registration__close-form'),
        switchToSignIn = document.querySelector('.switch-to-sign-in');

import './sign-in.sass';

import './../popup/popup'
import placeholderImage from '../../../assets/img/header/avatar-plaseholder.png'

import {Popup} from "../popup/popup";

class AuthForm extends Popup {
    constructor(button, container, closeFormElement, switchFormButton, switchedFormContainer) {
        super(button, container);

        closeFormElement.addEventListener('click', ()=>{
            container.classList.remove('is-active');
        });

        switchFormButton.addEventListener('click', ()=>{
            container.classList.remove('is-active');
            switchedFormContainer.classList.add('is-active');
        });
    }
}
const signInForm = new AuthForm(
    openSignInFormButton,
    signInFormContainer,
    signInCloseFormElement,
    switchToRegistrationButton,
    registrationFormContainer,
);

const registrationForm = new AuthForm(
    null,
    registrationFormContainer,
    registrationCloseFormElement,
    switchToSignIn,
    signInFormContainer,
);

userAvatarImage.src = placeholderImage;

export { signInForm, registrationForm, userAvatarImage }