var fs = require('fs');
var sfile = fs.readFileSync('201709b/pb1/input2.txt').toString();
var input = sfile.split('\n');
//var nb = input.shift(); /*?*/
input;
//------------------------------------------------------------

var col = ['violet','orange', 'jaune','vert','rose','bleu'];
var nb =input.reduce((a,e)=>{
    e;
    return a+=parseInt(e,10);
},0);
nb;
26%6; /*?*/
console.log(col[nb%6]);

//------------------------------------------------------------
var outfile = fs.readFileSync('201709b/pb1/output2.txt').toString();
var output = outfile.split('\n');
output;
