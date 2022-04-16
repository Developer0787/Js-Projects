document.addEventListener('DOMContentLoaded', () => {
    var ctrl = new ScrollMagic.Controller();
    
    // Create scenes in jQuery each() loop
    
      var tl = new TimelineMax();
      
      tl.from('.outer', 0.25, { scaleX: 0 });
      tl.from('.inner', 0.65, { yPercent: 100, ease: Back.easeOut });
      
      let scene = new ScrollMagic.Scene({
        triggerElement: '.section',
        triggerHook: 0,
        offset: '30'
      })
        .setTween(tl)
        .addTo(ctrl);
    
    })
    

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .set('.img-0', {
        visibility: 'visible'
    })
    .to('.img-0', 2, {
        visibility: 'hidden'
    })
    .to('.img-1', 2, {
        visibility: 'visible'
    }, '-=2')
    .to('.img-1', 2, {
        visibility: 'hidden'
    })
    .to('.img-2', 2, {
        visibility: 'visible'
    }, '-=2')
    .to('.img-2', 2, {
        visibility: 'hidden'
    })
    .to('.img-3', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-3', 2, {
        visibility: 'hidden'
    })
    .to('.img-4', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-4', 2, {
        visibility: 'hidden'
    })
    .to('.img-5', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-5', 2, {
        visibility: 'hidden'
    })
    .to('.img-6', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-6', 2, {
        visibility: 'hidden'
    })
    .to('.img-7', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-7', 2, {
        visibility: 'hidden'
    })
    .to('.img-8', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-8', 2, {
        visibility: 'hidden'
    })
    .to('.img-9', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-9', 2, {
        visibility: 'hidden'
    })
    .to('.img-10', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-10', 2, {
        visibility: 'hidden'
    })
    .to('.img-11', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-11', 2, {
        visibility: 'hidden'
    })
    .to('.img-12', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-12', 2, {
        visibility: 'hidden'
    })
    .to('.img-13', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-13', 2, {
        visibility: 'hidden'
    })
    .to('.img-14', 2, {
        visibility: 'visible'
    },'-=2')
    .to('.img-14', 2, {
        visibility: 'hidden'
    })
    .to('.img-15', 2, {
        visibility: 'visible'
    },'-=2')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.image-wrapper',
        duration: '55%',
        triggerHook: 0,
        offset: '120',
        
    })
    .setTween(timeline)
    .setPin('.image-wrapper')
    .addTo(controller);
})

