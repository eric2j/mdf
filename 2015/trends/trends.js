'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('2015/trends/input2.txt').toString();
var input = sfile.split('\n');

var max = input.shift();
var trouve = false;
if (max >= 60) {
    for (var i = 0; i <= max - 60; i++) {
        var m = new Map();
        for (var j = i; j < i + 60; j++) {
            var e = input[j];
            if (m.get(e) === undefined) {
                m.set(e, 1);
            } else {
                m.set(e, m.get(e) + 1);
            }
            //console.log(e, m.get(e));
            if (m.get(e) === 40) {
                console.log(e);
                trouve = true;
                break;
            }
        }
        if (trouve) break;
    }
}
if (!trouve) console.log('Pas de trending topic');

