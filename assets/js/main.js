
const videoMotion = document.getElementById("video-motion");
const overlayMotion = document.getElementById("overlay-motion");
const overlayHtml5 = document.getElementById("overlay-html5");
const closeButtonHtml5 = document.getElementById("close-button-html5");
const closeButtonMotion = document.getElementById("close-button-motion");
const popoverHtml5 = document.getElementById("popover-html5");
const popoverMotion = document.getElementById("popover-motion");
const ctaHtml5 = document.getElementById("cta-html5");
const ctaMotion = document.getElementById("cta-motion");
const wrapper = document.querySelector(".wrapper");
const sayHi = document.getElementsByClassName("say-hi");
let w = window.innerWidth;
let h = window.innerHeight;


if(w/h >= 3){
  videoMotion.style.width = "25%";
}

if(w/h < 3){
  videoMotion.style.width = "50%";
}

if(w/h < 1.59) {
  videoMotion.style.width = "90%";
}


window.addEventListener('resize', removeSayHi());
ctaMotion.addEventListener('click', function(){
  overlayMotion.style.display = "block";
  wrapper.style.overflowY = "hidden";
  popoverMotion.style.display = "flex";
  closeButtonMotion.style.display = "block";
});

ctaHtml5.addEventListener('click', function(){
  overlayHtml5.style.display = "block";
  wrapper.style.overflowY = "hidden";
  popoverHtml5.style.display = "flex";
  closeButtonHtml5.style.display = "block";
});

closeButtonHtml5.addEventListener('click', function(){
  overlayHtml5.style.display = "none";
  wrapper.style.overflowY = "scroll";
  popoverHtml5.style.display = "none";
  closeButtonHtml5.style.display = "none";
});

closeButtonMotion.addEventListener('click', function(){
  overlayMotion.style.display = "none";
  wrapper.style.overflowY = "scroll";
  popoverMotion.style.display = "none";
  closeButtonMotion.style.display = "none";
});

function removeSayHi() {
  if(h < 700 || w < 700){
    for(item of sayHi){
      item.style.display = "none";
    }
  }
  else {
    for(item of sayHi){
      item.style.display = "visible";
    }
  }

}
