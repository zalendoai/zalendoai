// Initialize ScrollMagic Controller
const controller = new ScrollMagic.Controller();

// Fade-up animation for feature cards
document.querySelectorAll('[data-animate="fade-up"]').forEach((element) => {
    new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
    })
    .setTween(gsap.from(element, { opacity: 0, y: 50, duration: 0.8 }))
    .addTo(controller);
});

// Slide-right animation for steps
document.querySelectorAll('[data-animate="slide-right"]').forEach((element) => {
    new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
    })
    .setTween(gsap.from(element, { opacity: 0, x: -50, duration: 0.8 }))
    .addTo(controller);
});