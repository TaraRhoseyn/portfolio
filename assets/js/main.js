// Controls navbar active elements based on location

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
document.getElementById("modeSwitch").addEventListener("click", testMode)
let modeSwitchColor = ""

function testMode() {
    modeSwitchColor = window.getComputedStyle(modeSwitch).backgroundColor;
    console.log(modeSwitchColor);
    if (modeSwitchColor === "rgb(204, 204, 204)") {
        initDarkMode();
    } else if (modeSwitchColor === "rgb(255, 136, 17)") {
        initLightMode();
    }
}

function initLightMode() {
    $('body').css('backgroundColor', '#FFF8F0').css('color', '#392F5A');
    $('.navbar').css('backgroundImage', 'linear-gradient(#FFF, #FFF8F0)');
    $('.nav-link').css('color', '#392F5A');
}

function initDarkMode() {
    $('body').css('backgroundColor', '#392F5A').css('color', '#FFF8F0');
    $('.navbar').css('backgroundImage', 'linear-gradient(#000, #392F5A)');
    $('.nav-link').css('color', '#FFF8F0');
}