
const navToggleIcon = document.querySelector('.nav-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const showMoreLogosBtn = document.querySelector('.show-more-button');
const showDropdownMenu = document.querySelector('.show-dropdwon-menu');
const dropdownMenu = document.querySelector('.dropdwon-menu');
const showMoreLogos = document.querySelector('.more-partner-logos');
const langMenu = document.querySelector('.lang-menu');


// Toggle navigation bar
navToggleIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// Show and hide navigation dropdown menu
function showMenu(menu){
    
    if(menu.classList.contains('lang-popup')){
        langMenu.classList.remove('hide')
    }
    else {
        dropdownMenu.classList.add('active')
    }
}

function hideMenu(menu){

    if(menu.classList.contains('lang-popup')){
        langMenu.classList.add('hide')
    }
    else {
        dropdownMenu.classList.remove('active')
    }
}


// Show more company logos
showMoreLogosBtn.addEventListener('click',()=>{
    showMoreLogos.classList.toggle('hide');

    const isMoreLogos = showMoreLogos.classList.contains('hide');
    showMoreLogosBtn.innerHTML = isMoreLogos ? "See more " : "See less"; 
}) 


