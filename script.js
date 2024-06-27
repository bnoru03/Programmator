document.addEventListener('DOMContentLoaded', function() {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
    var navLinks = navbarCollapse.querySelectorAll('a.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});

let principalUbication = window.scrollY;
let header = document.querySelector('.navbar');
let image = document.querySelector('.logo');
let image2 = document.querySelector('.logoMovile');
let container = document.querySelector('.container-fluid')

window.addEventListener('scroll', function() {
    let windowMove = window.scrollY;
    console.log(windowMove);

    if (principalUbication >= windowMove) {
        header.style.top = '0px';
        image.style.top = '0px';
        image2.style.display = '';
        container.style.display = '';
    } else {
        header.style.top = '-80px';
        image.style.top = '-80px';
        image2.style.display = 'none';
        container.style.display = 'none'; 
    }

    principalUbication = windowMove;
});