window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.paddingTop = "1em !important";
    } else {
        document.getElementById("navbar").style.paddingTop = "4em !important";
    }
}