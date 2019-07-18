import "../sign-in/sign-in";
import "../sign-in/sign-in-view";
import "../sign-in/google-sign-in/google-sign-in";
import "../sign-in/facebook-sign-in";
import "../sign-out/googlesign-out";

import "./header.sass";

import "../../../assets/img/header/cart-icon.png";
import "../../../assets/img/header/headerMainMenuImage1.png";
import "../../../assets/img/header/headerCarouselImage1.png";
import "../../../assets/img/header/headerCarouselImage2.png";
import "../../../assets/img/header/logo.png";
import "../../../assets/img/header/phone-icon.png";
import "../../../assets/img/header/search-icon.png";

import "owl.carousel2/dist/assets/owl.carousel.css";
import "owl.carousel2";

$('.head-carousel').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
});
