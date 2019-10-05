import $ from "jquery";

const signInDom = {
  openSignInFormButton: $(".authorization-button")[0],
  userAvatarImage: $(".avatar")[0],
  // Sign-in
  signInFormContainer: $(".sign-in-form-container")[0],
  signInCloseFormElement: $(".sign-in__close-form")[0],
  switchToRegistrationButton: $(".switch-to-registration")[0],
  // Sign-out
  registrationFormContainer: $(".registration-form-container")[0],
  registrationCloseFormElement: $(".registration__close-form")[0],
  switchToSignIn: $(".switch-to-sign-in")[0]
};
const signInFormVars = {
  button: signInDom.openSignInFormButton,
  container: signInDom.signInFormContainer,
  closeElement: signInDom.signInCloseFormElement,
  switchButton: signInDom.switchToRegistrationButton,
  switchedContainer: signInDom.registrationFormContainer
};
const registrationFormVars = {
  button: null,
  container: signInDom.registrationFormContainer,
  closeElement: signInDom.registrationCloseFormElement,
  switchButton: signInDom.switchToSignIn,
  switchedContainer: signInDom.signInFormContainer
};

export { signInDom, signInFormVars, registrationFormVars };
