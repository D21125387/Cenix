const navbar = document.querySelector('nav');

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.scrollY > 1) {
        navbar.classList.add('scrolled');
        navbar.classList.add('glass-no-round');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('glass-no-round')
    }
}