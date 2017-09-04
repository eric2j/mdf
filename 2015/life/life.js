'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('2015/life/input1.txt').toString();
var input = sfile.split('\n');
var nb = input.shift();
input;

var m = input.join(' ').split(' ');
var max = Math.max(...m); /*?max */

var p = [];
input.forEach(e => {
    var f = e.split(' ');
    for (var x = f[0]; x <= f[2]; x++) {
        for (var y = f[1]; y <= f[3]; y++) {
            if (p[y] === undefined) p[y] = []
            p[y][x] = 1; /*?x */
        }
    }
});
p;

for (var y = 1; y <= max; y++) {
    for (var x = 1; x <= max; x++) {
        if (p[y] !== undefined) {
            if (p[y][x] === 1) {
                // meurt
//                p[y][x] = (p[y - 1] === undefined || p[y - 1][x] === undefined) && p[y][x - 1] === undefined ? undefined : 1;
            } else {
                // vie
                p[y][x] = p[y - 1] !== undefined && p[y - 1][x] === 1 && p[y][x - 1] === 1 ? 1 : undefined;
            }
        }
    }
}
p;
