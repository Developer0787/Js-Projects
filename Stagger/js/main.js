gsap.registerPlugin(ScrollTrigger);

gsap.to('.selector', {
    scrollTrigger: {
        trigger: '.box',
        toggleActions: 'restart pause reverse pause',
        start: 'top 90%',
        end: 'top 10%',
        // scrub: 1,
        // markers: true
    },
    stagger: {
        each: .2,
        grid: 'auto',
        from: 'random',
    },
    duration: .3,
    background: 'orange',
    scale: 1,
    rotate: '360deg',
    
})
