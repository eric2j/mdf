var fs = require('fs');
var sfile = fs.readFileSync('2017/methodes/input2.txt').toString();
var inputs = sfile.split('\n');
var sprints = inputs.shift(); /*?*/
var nbTasks = inputs.shift(); /*?*/

inputs;
var t = inputs.reduce((t,e)=>{
    var s = e.split(' ');
    t -= parseInt(s[0]);
    t += parseInt(s[1]);
    return t; /*?*/
},nbTasks);
t;
console.log(t==0?'OK':'KO');
