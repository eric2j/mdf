var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input2.txt').toString();
var input = sfile.split('\n'); /*?*/
//------------------------------------------------------------
var nb = +input.shift();                                    // premiere entree convertie en nombre (= nb elements)
input = input.map(Number).sort((a, b) => a - b);            // convertion numerique et tri croissant de la liste de elements
var res = [];
for (var i = 0; i < nb; i++) {                              // autant de fois qu'il y a d'elements
    res.push(i % 2 === 0 ? input.shift() : input.pop());    // une fois le premier, une fois le dernier
}
console.log(res.join(' '));
//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output1.txt').toString();
var output = outfile.split('\n');
output;
