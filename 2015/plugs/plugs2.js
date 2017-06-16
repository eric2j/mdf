'use strict'
__dirname;
var fs = require('fs');
var sfile = fs.readFileSync('../js/mdf/2015/plugs/input2.txt').toString();
var input = sfile.split('\n');
input.shift();
var m = new Map();
for (var e of input) {
    var t = e.split(' ')[0];
    var n = parseInt(e.split(' ')[1]);
    if (m.get(t) === undefined) {
        m.set(t, []);
    }
    m.get(t).push(n);
}
var diff = m.get('M-M').length - m.get('F-F').length;
if (diff > 0) {
    m.get('M-M').sort((a, b) => a - b); /*? m.get('M-M').length */
    m.get('M-M').splice(0, diff);
} else if (diff < 0) {
    m.get('F-F').sort((a, b) => a - b);
    m.get('F-F').splice(0, -diff).sum();
}
var total = 0; /*?*/
m.forEach((e) => {
    total += e.reduce((a, e) => a + parseInt(e), 0);
})

console.log(total);