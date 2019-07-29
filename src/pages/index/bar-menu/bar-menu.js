import $ from "jquery"
import './bar-menu.sass'

import './../../../../assets/img/bar-menu/page1.jpg'
import './../../../../assets/img/bar-menu/page2.jpg'
import './../../../../assets/img/bar-menu/page3.jpg'
import './../../../../assets/img/bar-menu/page4.jpg'

$('.bar-menu-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    margin: 10,
});