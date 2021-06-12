
var kutu1 = document.querySelector("#kutu1");
var kutu2 = document.querySelector("#kutu2");
var kutu3 = document.querySelector("#kutu3");
var kutu4 = document.querySelector("#kutu4");
var fon = document.querySelector("#head").style.display = "block";

var sol1 = 0, sol2 = 0, sol3 = 0, sol4 = 0;
var soldur1;

function ileri1() {
    sol1 += 1;
    sol2 += 1.5;
    sol3 += 2;
    sol4 += 2.5;

    if (sol1 <= 80) {
        kutu1.style.left = sol1 + "px";
        kutu2.style.left = sol2 + "px";
        kutu3.style.left = sol3 + "px";
        kutu4.style.left = sol4 + "px";

    } else {
        clearInterval(soldur1);
        setTimeout(resim, 5000);
        setTimeout(k5, 5000);
        setTimeout(sifirla, 10000);
    }
}

function resim() {

    document.getElementById("kutular").style.display = "none";
    document.getElementById("head").style.backgroundImage = "url('12333.jpg')";
}

function k5() {
    document.getElementById("kutu5").style.display = "block";
    document.getElementById("kutu6").style.display = "block";
}

function sifirla() {
    document.getElementById("kutular").style.display = "block";
    document.getElementById("head").style.backgroundImage = "url('sigorta-2.png')";
    document.getElementById("kutu5").style.display = "none";
    document.getElementById("kutu6").style.display = "none";

    sol1 = 0, sol2 = 0, sol3 = 0, sol4 = 0;
    soldur1 = setInterval(ileri1, 1);
}

soldur1 = setInterval(ileri1, 1);


