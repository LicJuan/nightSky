'use strict'
let burger = document.querySelector('.burger'),
    topMenu = document.querySelector('.top-menu'),
    tl = gsap.timeline(),
    audio = document.getElementById("myAudio")
  audio.volume = 0.3;


    
burger.addEventListener('click', ()=> {
    topMenu.classList.toggle('display')
    burger.classList.toggle('toggle')
    if(topMenu.classList.contains('display')) {
        tl.from('.li-anim', {duration:1.2, y:-60, opacity: 0, stagger: .5})
    }
})

gsap.to('.load', {
    duration: .6,
    x: 0,
    delay: .5
})
gsap.to('.load', {
    duration: 4,
    x: 2000,
    delay: 1
})


var rellax = new Rellax('.rellax');

const bannerTimeLine = ()=> {
    let tl = gsap.timeline()
    tl.from( '.banner .trip span', { 
        duration: 1,
        ease: "power3. out",
        x: -50,
        opacity: 0,
        stagger: .5,
        delay: 1
    });
    tl.from('.aztro-img', {
        duration: 1,
        y: -100,
        opacity: 0,
        scaleY: 1,
        ease: " slow( 0.7, 0.7, false)",
        delay: .1
    })
    tl.from( '.banner .moon', { 
        duration: 1,
        ease: "power3. out",
        y: 50,
        opacity: 0,
        delay: .1
    });
    tl.from( '.btn-area', { 
        duration: 1.4,
        ease: "power3. out",
        opacity: 0,
        delay: .3
    });
    
}

bannerTimeLine()

