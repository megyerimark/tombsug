//  File: app.ts
// Author: Megyeri Márk Máté
// Copyright: 2022, Megyeri Márk Máté
// Group: Szoft II/N
// Date: 2022-10-19
// Github: https://github.com/megyerimark/
//
var oldalElem = document.querySelector('#oldal');
var alfaElem = document.querySelector("#alfa");
var gomb = document.querySelector("#submit");
var result = document.querySelector("#result");
function szamitSugar(oldal, alfa) {
    return 1 / 2 * oldal * Math.sin(alfa);
}
gomb.addEventListener('click', function () {
    var oldal = Number(oldalElem.value);
    var alfa = Number(alfaElem.value);
    var sugar = szamitSugar(oldal, alfa);
    result.innerHTML = String(sugar);
});
