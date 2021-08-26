// Controls navbar active elements based on location

window.onload = setActiveCls;
const navbar = document.getElementById('nav').getElementsByTagName('a');
function setActiveCls() {
    for(i = 0; i < navbar.length; i++) { 
        if(document.location.href.indexOf(navbar[i].href)>=0) {
            navbar[i].className='navlink-active';
        }
    }
}
console.log(navbar);