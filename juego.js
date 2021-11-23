"use strict";

var boton = document.querySelector("#inicio");
var fond = document.querySelector(".star_fond");
var letras = document.querySelector("#letters");
var nave = document.querySelector("#nave");
var fuego = document.querySelector("#fuego");
var m1 = document.querySelector("#m1");
var m2 = document.querySelector("#m2");
var m3 = document.querySelector("#m3");
var m4 = document.querySelector("#m4");
var m5 = document.querySelector("#m5");
var score = document.querySelector("#score");




function fondo() {
    fond.classList.add("star_fondo");
    letras.style.display = "none";
    nave.classList.remove("nave");
    nave.classList.add("navs");
    fuego.classList.remove("fuego");
    fuego.classList.add("fogoso");
    score.classList.remove("scor");
    score.classList.add("score")
}



function retraso() {
    if (document.querySelector(".fogoso")) {
        fuego.classList.remove("fogoso");
        fuego.classList.add("fuegos");
    }
}

function me1() {
    if (document.querySelector(".fuegos")) {
        m1.classList.remove("m1");
        m1.classList.add("uno");
    }
}

function me2() {
    if (document.querySelector(".fuegos")) {
        m2.classList.remove("m1");
        m2.classList.add("dos");
    }
}

function me3() {
    if (document.querySelector(".fuegos")) {
        m3.classList.remove("m1");
        m3.classList.add("tres");
    }
}

function me4() {
    if (document.querySelector(".fuegos")) {
        m4.classList.remove("m1");
        m4.classList.add("cuatro");
    }
}

function me5() {
    if (document.querySelector(".fuegos")) {
        m5.classList.remove("m1");
        m5.classList.add("cinco");
    }
}

function retrasado() {
    setTimeout(retraso, 2600);
    setTimeout(me1, 3000);
    setTimeout(me2, 3400);
    setTimeout(me3, 3200);
    setTimeout(me4, 3100);
    setTimeout(me5, 3500);
}



//! inicio del juego.

boton.addEventListener("click", function() {
    fondo();
    retrasado();
    showCoords()
});

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    nave.style.left = x + "px";
    nave.style.top = y + "px";
    fuego.style.left = x + "px";
    fuego.style.top = y + "px";
});

function parar() {
    m1.classList.remove("uno");
    m1.classList.add("m1");
    m2.classList.remove("dos");
    m2.classList.add("m1");
    m3.classList.remove("tres");
    m3.classList.add("m1");
    m4.classList.remove("cuatro");
    m4.classList.add("m1");
    m5.classList.remove("cinco");
    m5.classList.add("m1");
    letras.style.display = "block";
    fond.classList.remove("star_fondo");
    nave.classList.remove("navs");
    nave.classList.add("nave");
    fuego.classList.remove("fuegos");
    fuego.classList.add("fuego");
    score.classList.remove("score");
    score.classList.add("scor")
    var nom = document.querySelector("#name");
    nom.innerHTML = "GAME OVER ";
}

m1.addEventListener("mouseover", function() {
    parar()
});
m2.addEventListener("mouseover", function() {
    parar()
});
m3.addEventListener("mouseover", function() {
    parar()
});
m4.addEventListener("mouseover", function() {
    parar()
});
m5.addEventListener("mouseover", function() {
    parar()
});