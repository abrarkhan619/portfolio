const menuLinks = document.querySelector('.navbar__menu')
const menuClose = document.querySelector('.navbar__cross')
const menuBars = document.querySelector('.navbar__bars')
const menuCross = document.querySelector('.navbar__cross')




// Display mobile menu
const mobileMenu = () => {
    menuLinks.classList.toggle('active');
    menuBars.classList.toggle('hide');
    menuCross.classList.toggle('active');
}

menuBars.addEventListener('click', mobileMenu);
menuCross.addEventListener('click', mobileMenu);