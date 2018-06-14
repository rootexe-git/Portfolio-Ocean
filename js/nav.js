(function () {
    'use strict';
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        if ((window.pageYOffset+60) >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    };
})();