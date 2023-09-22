const menu = document.getElementById("menu");

window.onscroll = function() {
    if(window.pageYOffset > 1050) {
        menu.classList.add('menu-sticky');
        console.log("menu sticky added");
    }

    else {
        menu.classList.remove('menu-sticky');
        console.log("menu sticky removed");
    }
}