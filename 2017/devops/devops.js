var fs = require('fs');
var sfile = fs.readFileSync('2017/devops/input2.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/

var t=0;
var nbClients = 0;
input;

var a1 = i => i>0 && +input[i] > +input[i-1] ? 15 : 0;
var a2 = i => (i>1 && +input[i] > +input[i-1] && +input[i-1] > +input[i-2]) ? 20 : 0;
var a0 = i => i>0 && +input[i] === +input[i-1] ? 10 : 0;
var b1 = i => i>0 && +input[i] < +input[i-1] ? 5 : 0;
var b2 = i => i>1 && +input[i] < +input[i-1] && +input[i-1] < +input[i-2] ? 0 : 0;

var t = 15;
for(var i=1;i<nb;i++){
    var max = Math.max(a1(i),a2(i),a0(i),b1(i),b2(i)); /*?*/
    t += max;
};
t;
console.log(Math.round(t/nb+0.5));

