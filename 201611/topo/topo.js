var fs = require('fs');
var sfile = fs.readFileSync('201611/topo/input4.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;
input = input.map(e => ({ x: +e.split(' ')[0], y: +e.split(' ')[1], r: +e.split(' ')[2] })); /*?*/
input;
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

var res = 'OK';
input.forEach((a, i) => {
    input.forEach((b, j) => {
        if (i < j && res === 'OK') {
            var d = distance(a, b); /*?*/
            if (!(d < Math.abs(a.r - b.r) || d > Math.abs(a.r + b.r))) res = 'KO';
        }
    });
})
console.log(res);
