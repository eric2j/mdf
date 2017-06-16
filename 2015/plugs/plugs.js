'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('../js/mdf/2015/plugs/input2.txt').toString();
var input = sfile.split('\n');

input.shift();
input;

var FF= [], MM= [], FM= [], MF= [];

for (var e of input) {
    var t = e.split(' ')[0];
    var n = e.split(' ')[1];

    switch (t) {
        case 'F-F':
            FF.push(parseInt(n));
            break;
        case 'M-M':
            MM.push(parseInt(n));
            break;
        case 'M-F':
            MF.push(parseInt(n));
            break;
        case 'F-M':
            FM.push(parseInt(n));
            break;

        default:
            break;
    }
}
Array.prototype.sum = function () { return this.reduce((a, e) => a + parseInt(e), 0); }
var MMs = MM.sum();
var FFs = FF.sum();
var MFs = MF.sum();
var FMs = FM.sum();
MF.sort((a, b) => a - b);
FM.sort((a, b) => a - b);
MM.sort((a, b) => a - b);
FF.sort((a, b) => a - b);
var total = MFs + FMs; /*?*/
//if (MF.length === FM.length) {
MM;
FF;
var diff = MM.length - FF.length;
if (diff===0) {
    total += MMs + FFs;
} else if (diff>0) {
    MM.splice(0,diff);
    total += FFs + MM.sum();
} else {
    FF.splice(0,-diff).sum();    
    total += MMs + FF.sum();    
}
console.log(total);