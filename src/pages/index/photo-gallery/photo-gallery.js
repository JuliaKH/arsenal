import "./photo-gallery.sass"

import "../../../../assets/img/photo-gallery/about1.jpg"
import "../../../../assets/img/photo-gallery/about2.jpg"
import "../../../../assets/img/photo-gallery/about3.jpg"
import "../../../../assets/img/photo-gallery/about4.jpg"
import "../../../../assets/img/photo-gallery/about5.jpg"
import "../../../../assets/img/photo-gallery/about6.jpg"
import "../../../../assets/img/photo-gallery/about7.jpg"
import "../../../../assets/img/photo-gallery/about8.jpg"
import "../../../../assets/img/photo-gallery/about9.jpg"
import "../../../../assets/img/photo-gallery/about10.jpg"
import "../../../../assets/img/photo-gallery/about11.jpg"

$('.photo-gallery-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 1,
})