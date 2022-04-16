
document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section-1-01', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    })
    .from('.section-1-02', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-03', 4, {
        y: -100,
        x: -120,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-04', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-06', 4, {
        y: -100,
        x: -340,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-08', 4, {
        y: 30,
        x: -300,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-09', 4, {
        y: 60,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '250'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);
});

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline2 = new TimelineMax();
    timeline2
    .to('.top .image-container', 4, {
        height: 0
    });

    let scene = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);
});


document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline3 = new TimelineMax();
    timeline3
    .from('.section-3-01', 4, {
        y: -250,
        ease: Power3.easeInOut
    })
    .from('.section-3-02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-3-03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-3-04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-3-05', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-3-06', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4');


    let scene = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '160'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);
});

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline4 = new TimelineMax();
    timeline4
    .from('.section-4-02', 4, {
        visibility: 'hidden'
    })
    .from('.section-4-03', 4, {
        visibility: 'hidden'
    })
    .from('.section-4-04', 4, {
        visibility: 'hidden'
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);
})
