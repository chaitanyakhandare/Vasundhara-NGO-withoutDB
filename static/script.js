
var logo = document.querySelector(".nav-logo h4");
var midButtons = document.querySelector(".nav-middle h4");


gsap.to(".nav", {
    backgroundColor : "#192655",
    duration : 1,
    height : "12vh",
    scrollTrigger : {
        trigger : ".nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to(".nav-logo h4", {
    color : "white",
    duration : 1,
    scrollTrigger : {
        trigger : ".nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to(".nav-middle h4", {
    color : "white",
    duration : 1,
    scrollTrigger : {
        trigger : ".nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})










