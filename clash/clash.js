'use strict'

var fs = require('fs');
var sfile = fs.readFileSync('clash/input1.txt').toString();
var inputs = sfile.split('\n');
inputs.shift();
inputs;
inputs.forEach(e => console.log(e.replace(/0/g,'-')));

'a'.charCodeAt(); /*?*/
'Z'.toLowerCase