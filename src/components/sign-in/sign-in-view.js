import "./sign-in.sass";
import placeholderImage from "../../../assets/img/header/avatar-plaseholder.png";
import { signInDom, signInFormVars, registrationFormVars } from "./variables";
import { Popup } from "../popup/popup";

class AuthForm extends Popup {
  constructor(form) {
    super(form.button, form.container, form.closeElement);

    this.switchButton = form.switchButton;
    this.switchedContainer = form.switchedContainer;

    this.switchButton.addEventListener("click", () => {
      form.container.classList.remove("is-active");
      this.switchedContainer.classList.add("is-active");
    });
  }
}
const signInForm = new AuthForm(signInFormVars);
const registrationForm = new AuthForm(registrationFormVars);
signInDom.userAvatarImage.src = placeholderImage;

export { signInForm, registrationForm, AuthForm };
