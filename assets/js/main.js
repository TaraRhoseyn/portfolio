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

let typedText = 'CODING COMMUNICATOR';
let currentText = '';
let letter = '';
let index = 0;

// Enclose function, runs once it's read
(function typewriterEffect() {
    currentText = typedText;
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {

    }
    setTimeout(typewriterEffect, 200);
}());


