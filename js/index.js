const button = document.querySelector('.btn');
const nav = document.querySelector('.main-navigation');

const randomColor = function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return`rgb(${x}, ${y}, ${z})`; 
}

document.addEventListener('click', function() { 
    document.body.style.background = randomColor();
    document.body.style.color= randomColor();
});


let lastKnownScrollPosition = 0;
let ticking = false;
const [red, green, blue] = [255, 255, 225]


function doSomething(scrollPos) {
    let y = 1 + (window.scrollY || window.pageYOffset) / 300;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`

    if(window.scrollY > 400){
        document.body.style.color = 'white';
    }else{
        document.body.style.color = 'black';
    }
}  
document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

nav.addEventListener('mouseenter', e => {
    nav.style.border = '5px dotted orange';
});  

nav.addEventListener('mouseleave', e => {
    nav.style.border = '2px dashed black';
});  

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);

navLinks = document.querySelector('nav');

navLinks.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 1500);
  }, false);
  
const images = document.querySelectorAll('img');
console.log(images);
images.forEach(el => el.addEventListener('dblclick', function () {
    el.classList.toggle('large');
}));

function navKey(e) {
    nav.style.background = randomColor();
}
document.addEventListener('keydown', navKey);

function bodyKey(e) {
    document.body.style.background = randomColor();
    e.stopPropagation();
}
document.addEventListener('keyup', bodyKey);

Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
})



