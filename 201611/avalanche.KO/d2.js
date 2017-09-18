var fs = require('fs');
var sfile = fs.readFileSync('201611/avalanche/input1.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;
var l1=input.shift();
var start = 'S'+l1.split(' ')[0]; /*?*/
var end = 'S'+l1.split(' ')[1]; /*?*/

var s = [];
var a = new Map();
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
                a.set('S'+i+'S'+j,Math.round((1-parseFloat(b))*1000)/1000);
            }
        }

    })
});
s;
a;
//var z = (1-0.9).toFixed(3); /*?*/

var dijkstra = (S, A, Sdeb, Sfin) => {
    var P = [Sdeb]; /*?*/
    var Q = S;
    // Init
    var d = S.reduce((a, e) => {
        a[e] = (e === Sdeb ? 1 : Infinity); 
        return a;
    }, []);
    d;
    var predecesseur = [];

    var trouveMin = Q => {
        var mini = Infinity;
        var sommet = -1;
        Q.forEach(s => {
            if (d[s] < mini) {
                mini = d[s];
                sommet = s;
            }
        });
        return sommet;
    };

    var majDistances = (s1, s2) => {
        s1;
        s2;
        d;
        A.get(s1 + s2); /*?*/
        if (d[s2] > d[s1] * A.get(s1 + s2)) {
            d[s2] = d[s1] * A.get(s1 + s2);
            predecesseur[s2] = s1;
        }
    };
    var voisins = s => {
        var sv = [];
        A.forEach((v, k) => {
            if (k.indexOf(s) !== -1) {
                var t = k.replace(s, ''); /*?*/
                //if (Q.indexOf(t) > -1) {
                    sv.push(t);
                //}
            }
        });
        s;
        return sv;
    }
    var v1 = voisins('H'); /*?*/

    while (Q.length > 0) {
        var s1 = trouveMin(Q); /*?*/
        d;
        Q.splice(Q.indexOf(s1), 1); // remove S1 from Q
        P.push(s1);
        var sv = voisins(s1); /*?*/
        sv.forEach(e => {
            majDistances(s1, e);
        });
    }
    Q;
    P;
    d;
    predecesseur;
    var chemin = [];
    var sx = Sfin;
    do {
        chemin.push([sx,d[sx]]);
        sx=predecesseur[sx];
    } while(sx!==Sdeb);
    chemin.push([Sdeb,0]);
    chemin.reverse(); /*?*/
    return chemin; /*?*/
}
var cpc = dijkstra(s, a, start, end); /*?*/
console.log(1-cpc.pop()[1]);
