import './sellout.sass'

import  '../../../../assets/img/sellout/buy.png'
import  '../../../../assets/img/sellout/diagram.png'
import  '../../../../assets/img/sellout/heart.png'
import  '../../../../assets/img/sellout/accord.png'
import  '../../../../assets/img/sellout/guitar.png'
import  '../../../../assets/img/sellout/drum.png'
import  '../../../../assets/img/sellout/piano.png'

import $ from 'jquery'

let slideNow = 1;
const slideCount = $('#sellout__slidewrapper').children().length;
let translateWidth = 0;

function nextSlide() {
    if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#sellout__slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#sellout__viewport').width() * (slideNow);
        $('#sellout__slidewrapper').css({
            transform: `translate(${translateWidth}px, 0)`,
            '-webkit-transform': `translate(${translateWidth}px, 0)`,
            '-ms-transform': `translate(${translateWidth}px, 0)`,
        });
        slideNow++;
    }
}
// Інтервал слайдера
const slideInterval = 3000;
$(document).ready(() => {
    let switchInterval = setInterval(nextSlide, slideInterval);

    $('#sellout__viewport').hover(() => {
        clearInterval(switchInterval);
    }, () => {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});

// Buttons
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#sellout__viewport').width() * (slideCount - 1);
        $('#sellout__slidewrapper').css({
            transform: `translate(${translateWidth}px, 0)`,
            '-webkit-transform': `translate(${translateWidth}px, 0)`,
            '-ms-transform': `translate(${translateWidth}px, 0)`,
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#sellout__viewport').width() * (slideNow - 2);
        $('#sellout__slidewrapper').css({
            transform: `translate(${translateWidth}px, 0)`,
            '-webkit-transform': `translate(${translateWidth}px, 0)`,
            '-ms-transform': `translate(${translateWidth}px, 0)`,
        });
        slideNow--;
    }
}

$('#sellout__next-btn').click(() => {
    nextSlide();
});

$('#sellout__prev-btn').click(() => {
    prevSlide();
});
