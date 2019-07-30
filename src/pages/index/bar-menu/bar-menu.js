import $ from "jquery"
import './bar-menu.sass'

import './../../../../assets/img/bar-menu/page1.png'
import './../../../../assets/img/bar-menu/page2.png'
import './../../../../assets/img/bar-menu/page3.png'
import './../../../../assets/img/bar-menu/page4.png'
import './../../../../assets/img/bar-menu/page5.png'
import './../../../../assets/img/bar-menu/page6.png'
import './../../../../assets/img/bar-menu/page7.png'
import './../../../../assets/img/bar-menu/page8.png'
import './../../../../assets/img/bar-menu/page9.png'


$('.bar-menu-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    margin: 10,
});