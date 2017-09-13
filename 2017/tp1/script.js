var fs = require('fs');
var sfile = fs.readFileSync('2017/tp1/input2.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;

var getx = e => +e.split(' ')[0];
var gety = e => +e.split(' ')[1];
var dist = (a, b) => Math.sqrt(Math.pow(gety(b) - gety(a), 2) + Math.pow(getx(b) - getx(a), 2));

var l = 0;
var done = [];
var long = [];
for (var i = 0; i < nb; i++) {
    var ds = [];
    input[i]; /*?*/
    var dd = Infinity;
    var yy = '';
    for (var j = 0; j < nb; j++) {
        if (j !== i) {
            var d = dist(input[i], input[j]); /*?*/
            var y1 = input[j] + input[i]; /*?*/
            var y2 = input[i] + input[j]; /*?*/
            if (d < dd && done.indexOf(y1) === -1 && done.indexOf(y2) === -1) {
                dd = d; /*?*/
                yy = y2;
            }
            //ds.push(dist(input[i], input[j]));
        }
    }
    l += dd; /*?dd*/
    done.push(yy/*?*/); 
    long.push(dd);
    //if (ds.length > 0) l += Math.min(...ds);
}
done;
long;
var max = Math.max(...long); /*?*/
l -= max;
l;
console.log(Math.round(l*1000)/1000);
