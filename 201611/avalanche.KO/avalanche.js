var fs = require('fs');
var sfile = fs.readFileSync('201611/avalanche/input1.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;
var l1=input.shift();
var start = 'S'+l1.split(' ')[0]; /*?*/
var end = 'S'+l1.split(' ')[1]; /*?*/

var s = [];
var a = [], a2=[];
var x = [];
input.forEach((e,i)=>{
    var f=e.split(' ');
    s.push('S'+i);
    f.forEach((b,j)=>{
        if(i!==j){
            var k1 = 'S'+i+'S'+j; /*?*/
            var k2 = 'S'+j+'S'+i; /*?*/
            if( x.indexOf(k1)===-1 && x.indexOf(k2)===-1){
                x.push(k1);
                a.push(['S'+i,'S'+j,1-parseFloat(b)]);
                a2[k1]=1-parseFloat(b);
            }
        }

    })
});
s;
a;
a2;
var d = [];
s.forEach(e=>d[e]=Infinity);
d[start]=0;
d;
var trouveMin = (s,q) => {
    var min = Infinity;
    var sommet = -1;
    q.forEach(e=>{
        s;
        e;
        if (a2[s+e]<min || a2[e+s]<min){
            min = a2[s+e];
            sommet = e;
        }
    });
    return sommet;
}
trouveMin('S2',s); /*?*/

