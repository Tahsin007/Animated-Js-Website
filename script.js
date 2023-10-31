function videoconAnimation(){
    var videocon = document.querySelector('#video-container');
    var playbtn = document.querySelector('#play');

    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        });
    });
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0,
        });
    });

    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left: dets.x - 70,
            top: dets.y - 80,
        });
    });

}
function loadinganimation(){
  var tl = gsap.timeline();
    tl.from("#section1 h1",{
        y:100,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
        opacity:0,
    });
    tl.from("#section1 #video-container",{
        y:100,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
        opacity:0,
    });
    tl.from("#txt h1,#txt p",{
        y:100,
        delay:1,
        duration:0.9,
        stagger:0.3,
        opacity:0,
        color:"#FFD3D3",
    });

}
videoconAnimation();
loadinganimation()

function locomotiveAnimation(){
    const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
locomotiveAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  // elem.addEventListener("mouseleave", function () {
  //   gsap.to("#cursor", {
  //     transform: "translate(-50%,-50%) scale(0)",
  //   });
  // });
});

}
cursorAnimation();

