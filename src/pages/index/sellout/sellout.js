import './sellout.sass'

import  '../../../../assets/img/sellout/buy.png'
import  '../../../../assets/img/sellout/diagram.png'
import  '../../../../assets/img/sellout/heart.png'
import  '../../../../assets/img/sellout/accord.png'
import  '../../../../assets/img/sellout/guitar.png'
import  '../../../../assets/img/sellout/drum.png'
import  '../../../../assets/img/sellout/piano.png'

import "owl.carousel2/dist/assets/owl.carousel.css";
import "owl.carousel2";

$('.sellout__slider-block').owlCarousel({
    items: 1,
    dots: false,
    loop: false,
    nav: true,
    navText: ['']
});

let owlprev = document.querySelector('.owl-prev');
owlprev.innerHTML = '';
