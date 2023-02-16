import $ from 'jquery';

$(window).on('load', function () {
    const hbg = $('#hamburgerMenu')
    const nav = $('.navbar-nav')
    // open navbar
    $(hbg).on('click', function (e) {
        $(nav).toggleClass('active');
        e.preventDefault();
    });

});

// close offside navbar

document.addEventListener('click', function (e) {
if (!hbg.contains(e.target) && !nav.contains(e.target)) {
            
    nav.classList.removeClass('active');
    } 
});