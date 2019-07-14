import './popup.sass'

// const   popupButton = document.querySelector('.popup-button'),
//         popupContainer = document.querySelector('.popup-container');
//
// popupButton.addEventListener('click', ()=> {
//     popupContainer.classList.toggle('is-active');
// });
// popupContainer.addEventListener('click', ()=> {
//     popupContainer.classList.toggle('is-active');
// });
// document.onkeydown = function(event) {
//     if (event.key === 'Escape') {
//         popupContainer.classList.remove('is-active');
//     }
// };

class Popup {
    constructor(){
        this.button = document.querySelector('.popup-button');
        this.container = document.querySelector('.popup-container');

        this.button.addEventListener('click', ()=> {
            this.container.classList.toggle('is-active');
        });
        this.container.addEventListener('click', ()=> {
            this.container.classList.toggle('is-active');
        });
        document.onkeydown = (event) => {
            if (event.key === 'Escape') {
                this.container.classList.remove('is-active');
            }
        };
    }
}

export {Popup};