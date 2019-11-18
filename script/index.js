$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        speed: 1000
    });
});

let i = 0;
nav_button.onclick = function() {
    if (i % 2) {
        document.getElementById('nav_container').style.display = 'none';
    } else document.getElementById('nav_container').style.display = 'block';
    i++;
};
