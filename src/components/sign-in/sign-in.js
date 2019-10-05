import {
  authorizationFormContainer,
  openSignInFormButton
} from "./sign-in-view";
import { signInDom } from "./variables";

const registeredUsers = [
  {
    email: "Julia",
    password: "12345",
    photoURL: "https://picsum.photos/200/300"
  },
  {
    email: "Dima",
    password: "12345",
    photoURL: "https://picsum.photos/300/200"
  }
];

document.querySelector(".login").addEventListener("click", () => {
  const userEmail = document.querySelector(".login-email").value;
  const userPassword = document.querySelector(".login-password").value;
  let isRegistered = false;
  registeredUsers.forEach(({ email, password, photoURL }) => {
    if (email === userEmail && password === userPassword) {
      alert("ok");

      signInDom.userAvatarImage.src = photoURL;
      signInDom.openSignInFormButton.innerHTML = userEmail;
      signInDom.signInFormContainer.classList.remove("is-active");
      isRegistered = true;
    }
  });
  if (isRegistered === true) {
    document.getElementById("loginForm");
  } // .submit();
  else alert("Login or password doesn`t fit. Register, please");
});
document.querySelector(".register").addEventListener("click", () => {
  const newUser = {};
  const registerEmail = document.querySelector(".registration-email").value;
  const registerPassword = document.querySelector(".registration-password")
    .value;
  const registerUrl = document.querySelector(".registration-url").value;

  newUser.login = registerEmail;
  newUser.password = registerPassword;
  newUser.url = registerUrl;
  registeredUsers.push(newUser);
  document.querySelector(".avatar").src = registerUrl;
  document.querySelector(".authorization-button").innerHTML = registerEmail;
  document
    .querySelector(".authorization-form-container")
    .classList.remove("is-active");
  // document.getElementById('registrationForm').submit();
});
