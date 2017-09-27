var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input1.txt').toString();
var input = sfile.split('\n');
//------------------------------------------------------------
input;
var nb = +input.shift(); /*?*/
input = input.map(Number);
for (var i = 1; i < nb - 1; i++) {
    if (input[i - 1] < input[i] && input[i] < input[i + 1]) {
        
    }
}
input;
console.log(input.join(' '));


//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output1.txt').toString();
var output = outfile.split('\n');
output;
0 % 2; /*?*/
