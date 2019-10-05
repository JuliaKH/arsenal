// import {Popup} from "../src/components/popup/popup";
// import $ from 'jquery'
//
// describe('Popup', () => {
//     const body = document.getElementsByTagName("body")[0];
//     const button = document.createElement("button");
//     const container = document.createElement("div");
//     const closeFormElement = document.createElement("button");
//     const popup = new Popup(button, container, closeFormElement);
//
//     beforeAll(function() {
//         body.appendChild(button);
//         body.appendChild(container);
//         container.appendChild(closeFormElement);
//     });
//     it('should open popup on open button click', () => {
//         button.click();
//         expect(container).toHaveClass('is-active');
//     });
//     it('should close popup on close button click', () => {
//         popup.open();
//         closeFormElement.click();
//         expect(container).not.toHaveClass('is-active');
//     });
//     it('should close popup on container click', () => {
//         popup.open();
//         container.click();
//         expect(container).not.toHaveClass('is-active');
//     });
//     it('should close popup on escape button click', () => {
//         popup.open();
//         $.event.trigger({ type: 'keypress', which: 27 });
//         expect(container).not.toHaveClass('is-active');
//     });
// });