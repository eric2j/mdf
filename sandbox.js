
var a = ['bleu','vert','rouge','jaune','vert'];
a.splice(a.indexOf('rouge'), 1); // Supprimer un élément d'un tableau
a;
a= a.filter((item, pos, arr) => arr.indexOf(item) === pos); // Dédoublonne
a;

var input = ['3 2 2','1 1 1']
input = input.map(e => ({ x: +e.split(' ')[0], y: +e.split(' ')[1], r: +e.split(' ')[2] })); /*?*/
input;
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

parseInt('34',10); /*?*/
Math.floor(3.14152*100)/100; /*?*/

// Double parcours
input.forEach((a, i) => {
    input.forEach((b, j) => {
    });
});

// replace
'oiqsdf'.replace(/[if]/g,'1'); /*?*/
'oiqsdf'.replace(/^./g,'#'); /*?*/
'oiqsdf'.replace(/.$/g,'#'); /*?*/

// Find
var re = /\+[0-9]{1,3}-[0-9]{9,11}/;
re.test('+06-123456789'); /*?*/

// 
String.fromCharCode(66,79,66); /*?*/
'A'.charCodeAt(0); /*?*/
'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536
