

gsap.registerPlugin(ScrollTrigger)

gsap

gsap.to(".l-h1-1",{
    x:-1000,
    duration:40,
    repeat:-1,
    ease:"power2"
})
gsap.from(".l-h1-1",{
    scrollTrigger:{
        trigger:".l-h1-1",
        scrub:1
    },
    xPercent:-200,
    duration:0.2
})


gsap.from(".l-h1-2",{
    x:-1000,
    duration:40,
    repeat:-1,
    ease:"power1"
})
gsap.from(".l-h1-2",{
    scrollTrigger:{
        trigger:".l-h1-1",
        scrub:1,
    },
    xPercent:200,
    duration:0.2
})

gsap.to(".l-h1-3",{
    x:-1000,
    duration:40,
    repeat:-1,
    ease:"power2"
})
gsap.from(".l-h1-3",{
    scrollTrigger:{
        trigger:".l-h1-3",
        scrub:1
    },
    xPercent:-200,
    duration:0.2
})

gsap.registerEffect({
    name:'upDown',
    effect : (target , config) => {
      return gsap.to(target , {y:config.y,duration:config.duration,repeat:-1,ease:config.ease})
    },
    extendTimeline : true
  })

let tl23 = gsap.timeline()



 tl23.to(".orange-circle",{y:100,repeat:-1,duration:0.5,yoyo:true})
  .to(".orange-circle",{
     scrollTrigger:{
         trigger:".orange-circle",
         scrub:true,
         start:"70"
     },
     y:-100,
     x:-100,
     scale:38,
     ease:"power3",
     zIndex:101
 })

tl23.to(".textBox",{
    scrollTrigger:{
        trigger:".textBox",
        scrub:true,
        start:"-20%"
    },
    width:"0",
    height:"0",
})
gsap.to(".str",{
    scrollTrigger:{
        trigger:".str",
        scrub:1,
        start:100
    },
    color:"transparent"
})

    window.onload = function(){
        var tl = gsap.timeline(),
          firstBg = document.querySelectorAll('.text__first-bg'),
          secBg = document.querySelectorAll('.text__second-bg'),
          word  = document.querySelectorAll('.text__word');

        tl
          .to(firstBg, 0.5, {scaleX:1.1})
          .to(secBg, 0.5, {scaleX:1.1},"-=0.5")
          .to(word, 0.1, {opacity:1}, "-=0.1")
          .to(firstBg, 0.3, {scaleX:0})
          .to(secBg, 0.2, {scaleX:0});

         let firstBg2 = document.querySelectorAll('.text__first-bg-2'),
          secBg2 = document.querySelectorAll('.text__second-bg-2'),
          word2 = document.querySelectorAll('.text__word-2');

          tl
          .to(firstBg2, 0.5, {scaleX:1.1},"+=0.5")
          .to(secBg2, 0.5, {scaleX:1.1},"-=0.5")
          .to(word2, 0.1, {opacity:1}, "-=0.1")
          .to(firstBg2, 0.3, {scaleX:0})
          .to(secBg2, 0.2, {scaleX:0})

      }