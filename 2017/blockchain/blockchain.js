var fs = require('fs');
var sfile = fs.readFileSync('2017/blockchain/input2.txt').toString();
var input = sfile.split('\n');
var nbPers = input.shift(); /*?*/
var nbDem = input.shift(); /*?*/
var majorite = Math.floor(nbPers/2); /*?*/

var livre = input.reduce((l,e)=>{
    var f = e.split(' ');
    var c = f[0];
    var q = f[1];
    if(q>=majorite)l+=c;
    return l;
},'');
console.log(livre);
//      COKDJSZXGZEGXZSJVIGPYWHAA
Math.floor(91/2); /*?*/

