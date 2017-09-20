var fs = require('fs');
var sfile = fs.readFileSync('201406/pb1/input3.txt').toString();
var input = sfile.split('\n');
//var nb = input.shift(); /*?*/
input;
//------------------------------------------------------------
var dec = input.shift().split(' ');
dec;
var cs = ['C','P','Q','T'];
var vs = [2,3,4,5,6,7,8,9,10,'V','D','R','A'];
var r = [];
cs.forEach(c=>{
vs.forEach(v=>{
    var carte = c+v;
    if(dec.indexOf(carte)===-1) r.push(carte);
})
})
r;
console.log(r.join(' '));
//------------------------------------------------------------
var outfile = fs.readFileSync('201406/pb1/output3.txt').toString();
var output = outfile.split('\n');
output;
