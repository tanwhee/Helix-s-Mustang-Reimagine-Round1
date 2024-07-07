document.body.style.overflow = 'hidden';
// Disable scrolling initially
// GSAP animations
setInterval(function () {
    gsap.to('.load', {
        y: -100,
        opacity: 0,
        ease: "power1.out",
        scale: 0
    }, "same");
    gsap.to('.loader', {
        transform : 'translateY(-100%)',
        z: 0,
        ease: "power3.out",
        duration : 1
    });
    document.body.style.overflow = 'initial';

}, 6000);



const sideBar = ()=>{
    document.querySelector(".openMenuButton").addEventListener("click",function(){
        console.log("click")
        gsap.to("#sidebar",{
            right:"0vw",
        },"sameSideBar")
        gsap.to('.openMenuButton',{
            display:"none",
            duration:0.5
        },"sameSideBar")
        
        gsap.to('.closeMenuButton',{
            display : "flex",
            delay:0.5,
            ease:"power1"
        },"sameSideBar")
        
    })
    document.querySelector(".closeMenuButton").addEventListener("click",function(){
        console.log("click");
        gsap.to("#sidebar",{
            right:"-35vw",

        },"sameCloseBar")
        gsap.to('.closeMenuButton',{
            duration:0.5,
            display : "none"
        },"sameCloseBar")
        
        gsap.to('.openMenuButton',{
            delay:0.5,
            display : "flex"
        },"sameCloseBar")
        
    })
}

sideBar();

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