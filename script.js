/* button */

var button1 = document.getElementById("seasons");
var button2 = document.getElementById("food");
var button3 = document.getElementById("otaku");

function saison() {
    seasons.scrollIntoView(true);
}

function bouffe() {
    food.scrollIntoView(true);
}

function game() {
    otaku.scrollIntoView(true);
}

/* slider */

var slide = Array("img/fuji.png", "img/tradition.png", "img/modern.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
/* slider1 */

var slide1 = new Array("img/arcade.png", "img/Gashapon.png", "img/figure.png", "img/gamecenter.png");
var numero = 0;

function ChangeSlide1(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide1.length - 1;
    if (numero > slide1.length - 1)
        numero = 0;
    document.getElementById("slide1").src = slide1[numero];
}