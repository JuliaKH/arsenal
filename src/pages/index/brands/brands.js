import "./brands.sass";

import "../../../../assets/img/brands/ABK.png";
import "../../../../assets/img/brands/aria.png";
import "../../../../assets/img/brands/daddario.png";
import "../../../../assets/img/brands/jts.png";
import "../../../../assets/img/brands/pioneer.png";
import "../../../../assets/img/brands/Robe.png";
import "../../../../assets/img/brands/schecter.png";

import $ from "jquery";

let slideNow = 1;
const slideCount = $("#slidewrapper").children().length;
let translateWidth = 0;

function nextSlide() {
  if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
    $("#slidewrapper").css("transform", "translate(0, 0)");
    slideNow = 1;
  } else {
    translateWidth = -$("#viewport").width() * slideNow;
    $("#slidewrapper").css({
      transform: `translate(${translateWidth}px, 0)`,
      "-webkit-transform": `translate(${translateWidth}px, 0)`,
      "-ms-transform": `translate(${translateWidth}px, 0)`
    });
    slideNow++;
  }
}
// Інтервал слайдера
const slideInterval = 3000;
$(document).ready(() => {
  let switchInterval = setInterval(nextSlide, slideInterval);

  $("#viewport").hover(
    () => {
      clearInterval(switchInterval);
    },
    () => {
      switchInterval = setInterval(nextSlide, slideInterval);
    }
  );
});

// Buttons
function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$("#viewport").width() * (slideCount - 1);
    $("#slidewrapper").css({
      transform: `translate(${translateWidth}px, 0)`,
      "-webkit-transform": `translate(${translateWidth}px, 0)`,
      "-ms-transform": `translate(${translateWidth}px, 0)`
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$("#viewport").width() * (slideNow - 2);
    $("#slidewrapper").css({
      transform: `translate(${translateWidth}px, 0)`,
      "-webkit-transform": `translate(${translateWidth}px, 0)`,
      "-ms-transform": `translate(${translateWidth}px, 0)`
    });
    slideNow--;
  }
}

$("#next-btn").click(() => {
  nextSlide();
});

$("#prev-btn").click(() => {
  prevSlide();
});
