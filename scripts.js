function imgSlider(src) {
    document.querySelector('.pepsi').src = src;
}

function changeBG(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menuToggle() {
    const menu = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}