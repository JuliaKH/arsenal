import './popup.sass'

class Popup {
    constructor(button, container){
        this.button = button;
        this.container = container;
        console.log(button);
        console.log(container);

        if (this.button != null) {
            this.button.addEventListener('click', ()=> {
                this.container.classList.toggle('is-active');
            });
        }
        this.container.addEventListener('click', ()=> {
            if (event.target === this.container) {
                this.container.classList.toggle('is-active');
            }
        });
        document.onkeydown = (event) => {
            if (event.key === 'Escape') {
                this.container.classList.remove('is-active');
            }
        };
    }
}

export {Popup};