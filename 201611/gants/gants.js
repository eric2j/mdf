var fs = require('fs');
var sfile = fs.readFileSync('201611/gants/input1.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;
var m = new Map();
input.forEach(e=>{
    if(!m.get(e)) m.set(e,0);
    m.set(e,m.get(e)+1);
})
m;
var g=0;
m.forEach((k,v)=>{
  k;
});
console.log(g);
