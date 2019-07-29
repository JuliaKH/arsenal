import "./header.sass";

import "owl.carousel2/dist/assets/owl.carousel.css";
import "owl.carousel2";
import "../../../node_modules/video.js/dist/video-js.min.css"
import "videojs-youtube";

$('.head-carousel').owlCarousel({
    items: 1,
    dots: true,
    // loop: true,
    // autoplay: true,
    margin: 0,
});
