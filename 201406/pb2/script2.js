var fs = require('fs');
var sfile = fs.readFileSync('201406/pb2/input3.txt').toString();
var input = sfile.split('\n');
input;
//------------------------------------------------------------
input = input.map(e => ({ x: +e.split(' ')[0], y: +e.split(' ')[1], t: e.split(' ')[2] })); /*?*/
input;
var duree = d => d.split(':').reduce((a,e,i)=>a+=Math.pow(60,2-i)*parseInt(e),0);
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
duree('07:34:56'); /*?*/
var temps = 0;
var dist = 0;
for (var i = 0; i < input.length - 1; i++) {
    var t1 = input[i].t.split(':'); /*?*/
    t1 = parseInt(t1[0]) * 3600 + parseInt(t1[1]) * 60 + parseInt(t1[2]); /*?*/
    var t2 = input[i + 1].t.split(':'); /*?*/
    t2 = parseInt(t2[0]) * 3600 + parseInt(t2[1]) * 60 + parseInt(t2[2]); /*?*/
    temps += t2 - t1;/*?*/
    dist += distance(input[i], input[i + 1]); /*?*/
}
temps;
dist;
console.log(Math.round(dist/temps*3.6*100)/100);
//------------------------------------------------------------
var outfile = fs.readFileSync('201406/pb2/output3.txt').toString();
var output = outfile.split('\n');
output;
