// Controls navbar active elements based on location

document.addEventListener('DOMContentLoaded',() => {
    if (lightMode = false) {
        initDarkMode();
    } else {
        initLightMode();
    }
    console.log(lightMode);
});

window.onload = setActiveCls;
const navbar = document.getElementById('nav').getElementsByTagName('a');
function setActiveCls() {
    for(i = 0; i < navbar.length; i++) { 
        if(document.location.href.indexOf(navbar[i].href)>=0) {
            navbar[i].className='navlink-active nav-link dd-link slide bottom';
        }
    }
}

// Typewriter effect

let typedText = 'THE CODING COMMUNICATOR';
let currentText = '';
let letter = '';
let index = 0;

// Enclose function, runs once it's read
(function typewriterEffect() {
    currentText = typedText;
    letter = currentText.slice(0, ++index);
    // $(".typing").textContent = letter;
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        // $(".typing").css("animation", "none");
    }
    setTimeout(typewriterEffect, 100);
}());


// Dark and light mode

modeSwitch = document.getElementById("modeSwitch");
document.getElementById("modeSwitch").addEventListener("click", testMode);
let modeSwitchColor = "";
var lightMode = false;

function testMode() {
    modeSwitchColor = window.getComputedStyle(modeSwitch).backgroundColor;
    console.log(modeSwitchColor);
    if (modeSwitchColor === "rgb(161, 161, 161)") {
        initDarkMode();
    } else if (modeSwitchColor === "rgb(255, 136, 17)") {
        initLightMode();
    }
}

function initLightMode() {
    $('body').css('backgroundColor', '#F1EAE1').css('color', '#392F5A');
    $('.navbar').css('backgroundImage', 'linear-gradient(#FFF, #F1EAE1)');
    $('.nav-link').css('color', '#392F5A');
    $('path').attr("fill","#392F5A"); 
    lightMode = true;
    console.log(lightMode)
}

function initDarkMode() {
    $('.nav-link').css('color', '#F1EAE1');
    $('body').css('color', '#F1EAE1').css('backgroundColor', '#392F5A');
    $('.navbar').css('backgroundImage', 'linear-gradient(#000, #392F5A)');
    $('path').attr("fill","#fff"); 
    lightMode = false;
    console.log(lightMode)
} 
