let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

/*timeline.to('.text' , 5 , {x:500})*/

/*timeline.fromTo(".text" , {opacity : 0} , {opacity : 1} , duration= 5)*/

timeline
    .to('.main-subtitle' , 3, {y : -200} , "-=3")
    .to('.bg1' , 3 , {y: -50} , "-=3" )
    .to('.content' , 3 , {top: "0%" } , "-=3")
    .fromTo('.content-images' , {opacity : 0 } , {opacity : 1 , duration:0.6})
    .fromTo('.text' , {opacity : 0 } , {opacity : 1 , duration:0.6})
    .fromTo('.second-text' , {opacity : 0 } , {opacity : 1 , duration:0.6});



let scene = new ScrollMagic.Scene({
    triggerElement : "section" , 
    duration : "175%",
    triggerHook : 0,
}).setTween(timeline)
.setPin("section")
.addTo(controller)