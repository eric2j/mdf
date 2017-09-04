'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('2015/auto/input1.txt').toString();
var input = sfile.split('\n');

var nb = input.shift(); /*?*/
var dico = input.slice(0, nb++); /*?*/
var saisi = input.slice(nb); /*?*/

saisi.forEach(e => {
    dico.forEach(d => {
        cost(e,d);
    });
});

function cost(saisie, mot) {
    // ajout & suppression
    var p1 = Math.abs(saisie.length - mot.length); /*?*/

}
cost('carteapuce', 'bulbizarre');


let d = 'AX'.split('').reverse().reduce((a,b,i)=>{
    return a + (b.charCodeAt(0)-64) * Math.pow(26,i);
},0);
d;
// DY => 129

let x=129;
String.fromCharCode( Math.floor(x/26)+64,x%26+64 ); /*?*/
