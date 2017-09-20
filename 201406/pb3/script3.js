var fs = require('fs');
var sfile = fs.readFileSync('201406/pb3/input1.txt').toString();
var input = sfile.split('\n');
//var nb = input.shift(); /*?*/
input;
//------------------------------------------------------------
/*
a, j => 1 
b, k, s => 2 
c, l, t => 3 
d, m, u => 4 
e, n, v => 5 
f, o, w => 6 
g, p, x => 7 
h, q, y => 8 
i, r, z => 9
*/
input.forEach(r=>{
    var r2 = r.toLowerCase().replace(/[aj]/g,'1').replace(/[bks]/g,2)
    .replace(/[clt]/g,3).replace(/[dmu]/g,4).replace(/[env]/g,5).replace(/[fow]/g,6).replace(/[gpx]/g,7).replace(/[hqy]/g,8).replace(/[irz]/g,9);
    r2;
    var rib = r2.split(' '); /*?*/
    var c = 89*rib[0]+15*rib[1]+3*rib[2];
    97-c%97; /*?*/
    parseInt(rib[3]); /*?*/
    var valide = 97-c%97 === parseInt(rib[3]); /*?*/
    
    if(valide) console.log('OK')
    else console.log('KO')
})
//------------------------------------------------------------
var outfile = fs.readFileSync('201406/pb3/output1.txt').toString();
var output = outfile.split('\n');
output;
