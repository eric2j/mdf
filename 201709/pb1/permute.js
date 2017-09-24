var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input2.txt').toString();
var input = sfile.split('\n'); /*?*/
//------------------------------------------------------------
//var permute = (a, i, j) => { a.splice(i, 2, ...a.slice(i, j + 1).reverse()) };
var permute = (a, i, j) => { a.splice(i, 2, a[j], a[i]) };
var nb = input.shift(); /*?*/
input = input.map(Number); /*?*/
for (var i = 0; i < input.length - 1; i++) {
    if (i % 2 === 1 && input[i] < input[i + 1]) {
        permute(input, i, i + 1);
    }
    if (i % 2 === 0 && input[i] > input[i + 1]) {
        permute(input, i, i + 1);
    }
}
console.log(input.join(' '));
//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output1.txt').toString();
var output = outfile.split('\n');
output;
