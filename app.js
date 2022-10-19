//  File: app.ts
// Author: Megyeri Márk Máté
// Copyright: 2022, Megyeri Márk Máté
// Group: Szoft II/N
// Date: 2022-10-19
// Github: https://github.com/megyerimark/
//
var szoldal = document.querySelector('#oldal');
var alfa = document.querySelector('#alfa');
var szamitGomb = document.querySelector('#submit');
var eredmeny = document.querySelector("#result");
function szamitsugar(szoldal) {
    return 1 / 2 * szoldal * Math.sin(alfa);
}
szamitGomb.addEventListener("click", function () {
    var oldal = Number(szoldal.value);
    var alda = Number(alfa.value);
    var sugar = szamitsugar(szoldal);
    eredmeny.innerHTML = String(szoldal);
});
// szamol.addEventListener('click , ()=>{
//     let oldal= Number(szoldal.value);
// });
