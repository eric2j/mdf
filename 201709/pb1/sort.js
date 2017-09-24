var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input2.txt').toString();
var input = sfile.split('\n'); /*?*/
//------------------------------------------------------------
var nb = input.shift(); /*?*/
input = input.map(Number).sort((a, b) => a - b); /*?*/
var res = [];
for (var i = 0; i < nb; i++) {
    res.push(i % 2 === 0 ? input.shift() : input.pop());
}
console.log(res.join(' '));
//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output1.txt').toString();
var output = outfile.split('\n');
output;
