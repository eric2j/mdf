var fs = require('fs');
var sfile = fs.readFileSync('201611/gants/input3.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;
//------------------------------------------------------------
var gs=[];
input.forEach(e=>{
    gs[e] = gs[e]!==undefined ? gs[e]+1 : 1;
});
gs;
var nb = 0;
for (var c in gs ){
    nb+=Math.floor(gs[c]/2);
}
nb;

console.log(nb);    


//------------------------------------------------------------
var outfile = fs.readFileSync('201611/gants/output3.txt').toString();
var output = outfile.split('\n');
output;
