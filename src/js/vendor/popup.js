// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

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

let regBtn = document.getElementsByClassName('get-registration')[0];
let submitBtn = document.getElementsByClassName('submit')[0];
let url = document.getElementsByClassName('url')[0];
let heading = document.getElementsByClassName('heading')[0];

regBtn.onclick = () => {
    url.style.display = "block";
    heading.innerHTML = 'Registration';
    submitBtn.innerHTML = 'Register';
    submitBtn.classList.add('registration');
    submitBtn.classList.remove('login');
};