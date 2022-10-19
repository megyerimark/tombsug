//  File: app.ts
// Author: Megyeri Márk Máté
// Copyright: 2022, Megyeri Márk Máté
// Group: Szoft II/N
// Date: 2022-10-19
// Github: https://github.com/megyerimark/
//

const oldalElem=document.querySelector('#oldal') as HTMLInputElement;
const alfaElem = document.querySelector("#alfa") as HTMLInputElement;
const szamitGomb = document.querySelector("#submit") as HTMLInputElement;
const eredmeny = document.querySelector("#result") as HTMLInputElement;



function szamitSugar(oldal:number ,alfa :number):Number{
    return 1/2*oldal*Math.sin(alfa);
}
