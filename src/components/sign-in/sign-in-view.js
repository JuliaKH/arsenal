import './sign-in.sass';
import {signInDom} from "./variables";

import './../popup/popup'
import placeholderImage from '../../../assets/img/header/avatar-plaseholder.png'

import {Popup} from "../popup/popup";
console.log(signInDom.switchToRegistrationButton);
class AuthForm extends Popup {
    constructor(button, container, closeFormElement, switchFormButton, switchedFormContainer) {
        super(button, container, closeFormElement);

        this.switchFormButton = switchFormButton;
        this.switchedFormContainer = switchedFormContainer;

        this.switchFormButton.addEventListener('click', ()=>{
            container.classList.remove('is-active');
            this.switchedFormContainer.classList.add('is-active');
        });
    }
}
const signInForm = new AuthForm(
    signInDom.openSignInFormButton,
    signInDom.signInFormContainer,
    signInDom.signInCloseFormElement,
    signInDom.switchToRegistrationButton,
    signInDom.registrationFormContainer,
);

const registrationForm = new AuthForm(
    null,
    signInDom.registrationFormContainer,
    signInDom.registrationCloseFormElement,
    signInDom.switchToSignIn,
    signInDom.signInFormContainer,
);

signInDom.userAvatarImage.src = placeholderImage;

export { signInForm, registrationForm }