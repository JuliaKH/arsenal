// Get the modal
let modal = document.getElementById("Modal");

// Get the button that opens the modal
let btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = () => modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} ;

const regBtn = document.getElementsByClassName('get-registration')[0];
const modalRegistration= document.querySelector('.modal-registration');
const modalLogin = document.querySelector('.modal-login');
// const submitBtn = document.getElementsByClassName('submit')[0];
let url = document.getElementsByClassName('url')[0];
// const heading = document.getElementsByClassName('heading')[0];

regBtn.onclick = () => {
    // url.style.display = "block";
    // heading.innerHTML = 'Registration';
    // submitBtn.innerHTML = 'Register';
    if(regBtn.classList.contains('login')){
        modalRegistration.style.display = "block";
        modalLogin.style.display = "none";
    }
    if(regBtn.classList.contains('registration')){
        modalRegistration.style.display = "none";
        modalLogin.style.display = "block";
    }

    // submitBtn.classList.remove('login');

};