'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('2015/gants-in.txt').toString();
var inputs = sfile.split('\n');
inputs.shift();
inputs; /*?*/
var m = new Map();
inputs.forEach(e => {
    if (m.get(e) === undefined) {
        m.set(e, 1);
    } else {
        m.set(e, m.get(e) + 1);
    }
});
m;
var s=0;
for (var valeur of m.values()) {
    s+=Math.floor(valeur/2);
}
s;
