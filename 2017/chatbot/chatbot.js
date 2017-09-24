var fs = require('fs');
var sfile = fs.readFileSync('2017/chatbot/input1.txt').toString();
var input = sfile.split('\n');
var sprints = input.shift(); /*?*/

var villes = ['paris', 'lyon', 'nantes', 'marseille'];
var res ='Pas de magasin';
input.forEach(e=>{
    villes.forEach(v=>{
        if (e.toUpperCase().indexOf(v.toUpperCase())!==-1) res = v;
    })
});
console.log(res);

'Vos magasins près de marseille sont supers'.match(/Paris|Lyon|Marseille|Nates/gi); /*?*/
(/Paris|Lyon|Marseille|Nates/gi).test('Vos magasins près de marseille sont supers'); /*?*/
