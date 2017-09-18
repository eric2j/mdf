var S = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
var A = new Map();
A.set('AB', 85);
A.set('AC', 217);
A.set('AE', 173);
A.set('BF', 80);
A.set('FI', 250);
A.set('IJ', 84);
A.set('CG', 186);
A.set('CH', 103);
A.set('HD', 183);
A.set('HJ', 167);
A.set('EF', 502);
var Sdeb = 'A', Sfin = 'J';
A;

// Dijkstra from https://fr.wikipedia.org/wiki/Algorithme_de_Dijkstra
var dijkstra = (S, A, Sdeb, Sfin) => {
    var P = [Sdeb]; /*?*/
    var Q = S;
    // Init
    var d = S.reduce((a, e) => {
        a[e] = (e === Sdeb ? 0 : Infinity); 
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
        if (d[s2] > d[s1] + A.get(s1 + s2)) {
            d[s2] = d[s1] + A.get(s1 + s2);
            predecesseur[s2] = s1;
        }
    };
    var voisins = s => {
        var sv = [];
        A.forEach((v, k) => {
            if (k.indexOf(s) !== -1) {
                var t = k.replace(s, ''); /*?*/
                if (Q.indexOf(t) > -1) {
                    sv.push(t);
                }
            }
        });
        s;
        return sv;
    }
    var v1 = voisins('H'); /*?*/

    while (Q.length > 0) {
        var s1 = trouveMin(Q); /*?*/
        d;
        //if (s1 === Sfin) break;
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
var cpc = dijkstra(S, A, Sdeb, Sfin); /*?*/
console.log(cpc.pop()[1]);