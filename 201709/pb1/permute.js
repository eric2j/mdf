var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input2.txt').toString();
var input = sfile.split('\n'); /*?*/
//------------------------------------------------------------
//var permute = (a, i, j) => { a.splice(i, 2, ...a.slice(i, j + 1).reverse()) };
var permute = (a, i, j) => { a.splice(i, 2, a[j], a[i]) };  // fonction : permute les elements i et j d'un tableau a
var nb = input.shift();                                     // lit la premiere entree = nb elements
input = input.map(Number);                                  // converti les entrees 'chaine' en 'nombre'
for (var i = 0; i < input.length - 1; i++) {                // parcours de toute la liste
    if ((i % 2 === 1 && input[i] < input[i + 1])            // si indice impair ET element suivant plus grand que courant
        || (i % 2 === 0 && input[i] > input[i + 1])) {      // ou si indice pair ET element suivant plus petit que courant
        permute(input, i, i + 1);                           // permute element courant et element suivant
    }
}
console.log(input.join(' '));                               // sortie
//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output1.txt').toString();
var output = outfile.split('\n');
output;
