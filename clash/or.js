var fs = require('fs');
var sfile = fs.readFileSync('clash/in-or.txt').toString();
var inputs = sfile.split('\r\n');
var T = inputs[0]; 
var T2 = inputs[1];
T ;
T2;
//r=readline,T=r(),T2=r();
for(i=0,r='',p=parseInt;i<T.length;i++){r+=p(T[i])|p(T2[i]);}
console.log(r);
console.log(T.split('').reduce((a,b,i)=>a+(p(b)|p(T2[i])),''));

