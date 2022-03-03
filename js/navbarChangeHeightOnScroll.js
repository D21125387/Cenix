var navbar = document.querySelector('nav')

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.scrollY > 1) {
        navbar.classList.add('scrolled')
        navbar.classList.remove('bg-dark')
    } else {
        navbar.classList.add('bg-dark')
        navbar.classList.remove('scrolled')
    }
}