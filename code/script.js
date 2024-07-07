// document.body.style.overflow = 'hidden';
// Disable scrolling initially
// GSAP animations
gsap.set('.btnforvideo', { opacity: 0, y: 10, scale: 0 });
setInterval(function () {
    gsap.to('.load', {
        y: -100,
        opacity: 0,
        ease: "power1.out",
        scale: 0
    }, "same");
    gsap.to('.btnforvideo', {
        y: 0,
        delay: 0.2,
        scale: 1,
        opacity: 1,
        ease: "power2.in"
    });
}, 6000);

document.querySelector('.btnforvideo').addEventListener('click', function () {
    document.querySelector('.btnforvideo').classList.add('scale-0');
    let tl = gsap.timeline();
    tl.to('.loader', {
        opacity: 0,
        z: 0,
        ease: "power2.out",
        scale: 0
    });
    document.querySelector('#video').play();
    setInterval(function () {
        document.querySelector('#video').pause();
        document.body.style.overflow = 'initial';
    }, 11000);
    tl.to('#video', {
        opacity: 0,
        delay: 11,
    });
    tl.to('#video', {
        scale: 0,
        duration: 0.1
    });
    
});

window.addEventListener("scroll", function (dets) {
    console.log(dets);
});

const slidesAnimation = () => {
    gsap.to(".slides .slide", {
        scrollTrigger: {
            trigger: ".RealTalk",
            start: "top top",
            end: "bottom 100%",
            scrub: 2,
            // markers:true
        },
        xPercent: -300,
    });
};

// Car engine humming sound
const CarStartSound = () => {
    const sound = document.querySelector("#garageSound");
    const CarStartBtn = document.querySelector(".CarStartSound");
    CarStartBtn.addEventListener("click", () => {
        sound.play();
        document.querySelector(".engineImage").classList.add("humming");
    });
};

CarStartSound();

if (window.innerWidth > 670) {
    slidesAnimation();
}

const page2Animation = ()=>{
    gsap.from('#bigCar-1',{
        
    })
}

page2Animation()



//page5carousel
//carousel start

// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

// Initial setup to prepend the first thumbnail item
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Event listeners for next and previous buttons
nextDom.onclick = function() {
    showSlider('next');    
}

prevDom.onclick = function() {
    showSlider('prev');    
}

// Function to handle the slider transition
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        // Move the first item to the end
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        // Move the last item to the beginning
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove animation classes after the transition
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, 500); // Match the duration of your CSS transition/animation
}
// carousel end