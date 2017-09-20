var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input3.txt').toString();
var input = sfile.split('\n');
//------------------------------------------------------------

var nb = input.shift(); /*?*/
input;
input = input.map(Number);
input;
input = input.sort();
input;


var min = [], max = [];
input.length; /*?*/
while (input.length > 0) {
    min.push(input.shift());
    if (input.length > 0) max.push(input.pop());
    input.length; /*?*/
}
min;
max;
min.length; /*?*/
max.length; /*?*/
max.length + min.length; /*?*/
var res = [];
if (max.length >= min.length) {
    while (min.length > 0 || max.length > 0) {
        if (max.length > 0) res.push(max.shift());
        if (min.length > 0) res.push(min.shift());
    }
} else {
    while (min.length > 0 || max.length > 0) {
        if (min.length > 0) res.push(min.shift());
        if (max.length > 0) res.push(max.shift());
    }
}
max;
min;
res;
console.log(res.join(' '));
//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output3.txt').toString();
var output = outfile.split('\n');
output;
