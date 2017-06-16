'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('../js/mdf/2015/tags/input1.txt').toString();
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
})
var m2 = [...(m.entries())];
m2.sort((a, b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    return 0;
});
m2; /*?*/
m2.splice(5);
m2; /*?*/
m2.forEach(e=>{
    console.log(e[0],e[1]);
})

