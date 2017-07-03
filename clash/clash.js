var fs = require('fs');
var sfile = fs.readFileSync('clash/input1.txt').toString();
var inputs = sfile.split('\n');
var print=console.log;
//-------------------------------------------

// Remplacer les 0 par des -
inputs.shift();
inputs;
inputs.forEach(e => print(e.replace(/0/g,'-')));

// Majuscule vers minuscule et inversement
//var S = readline();
var S = 'Hello COdinGame';
var r='';
for(i=0;i<S.length;i++){
    r+= (S[i].charCodeAt()>90)?S[i].toUpperCase():S[i].toLowerCase();
}
print(r);

// V2
print(S.split('').reduce((a,b)=>a+((b>'Z')?b.toUpperCase():b.toLowerCase())),);



// Playground
'a'.charCodeAt(); /*?*/
t = 'a'>'A';
t;

[,a,b,c] = /(\d+) (\d+) (\d+)/.exec('16 2 3');
a;
b;
c;
a+5; /*?*/
c++;
c;


/*
ins=r().split(' ');
var LX = +ins[0];
var LY = +ins[1];
var TX = +ins[2];
var TY = +ins[3];
*/

var a = (true)?(1,c++):3;
a;

