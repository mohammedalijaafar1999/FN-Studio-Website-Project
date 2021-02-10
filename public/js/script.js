// Wrap every letter in a span for FN Studio
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false,
    })
    .add({
        targets: '.ml3 .letter',
        opacity: [0,0],
        duration:2000,
        easing: "linear"
    })
    .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    });

// Wrap every letter in a span for intro p
var textWrapperp = document.querySelector('.ml3t');
textWrapperp.innerHTML = textWrapperp.textContent.replace(/\S/g, "<span class='letterp'>$&</span>");

anime.timeline({
        loop: false,
    })
    .add({
        targets: '.ml3t .letterp',
        opacity: [0,0],
        duration:3500,
        easing: "linear"
    })
    .add({
        targets: '.ml3t .letterp',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 100 * (i+1)
    });

// Wrap every letter in a span for intro p
anime.timeline({
        loop: false,
    })
    .add({
        targets: 'menu-item',
        opacity: [0,0],
        duration:3500,
        easing: "linear"
    })
    .add({
        targets: '.ml3t .letterp',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 100 * (i+1)
    });