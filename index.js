//CARROSSEL
// importar cards
var card1 = window.document.getElementById("card1");
var card2 = window.document.getElementById("card2");
var card3 = window.document.getElementById("card3")

//importar setas
var setaL = window.document.getElementById("SetaL")
var setaR = window.document.getElementById("SetaR")

function rolarParaDireita(){
 setaL.style="display:flex;"
 card1.style="display:none;"
 card3.style="display:flex;"
 setaR.style="display:none;"

 

}

function rolarParaEsquerda(){
 setaR.style="display:flex;"
 card3.style="display:none;"
 card1.style="display:flex;"
 setaL.style="display:none;"
}