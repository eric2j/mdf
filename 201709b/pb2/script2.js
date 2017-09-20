var fs = require('fs');
var sfile = fs.readFileSync('201709b/pb2/input2.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;
//------------------------------------------------------------

var p = input[0].split(' ');
p;
p.length; /*?*/
var de = input[1].split(' ');
de;
var pos = 0;
var montant = +(nb, 10); /*?*/
de.length / 2; /*?*/
for (var i = 0; i < (de.length / 2); i += 2) {
    pos = (pos + parseInt(de[i]) + parseInt(de[i + 1])) % 40; /*?*/
    pos = pos >= 40 ? (pos % 40) - 1 : pos;
    if (pos === 19) {
        pos = 9;
    } else {
        montant -= parseInt(p[pos]);
    }
    montant;
    if (montant <= 0) {
        break;
    }
}
console.log(pos + 1);

//------------------------------------------------------------
var outfile = fs.readFileSync('201709b/pb2/output2
.txt').toString();
var output = outfile.split('\n');
output;
