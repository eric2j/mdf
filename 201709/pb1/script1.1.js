var fs = require('fs');
var sfile = fs.readFileSync('201709/pb1/input1.txt').toString();
var input = sfile.split('\n');
//------------------------------------------------------------
input;

// var nb = +input.shift(); /*?*/
// input = input.map(Number).sort((a, b) => b - a); /*?*/
// var res = [];
// for (var i = 0; i < nb; i++) {
//     res.push(i % 2 === 0 ? input.shift() : input.pop());
// }
// console.log(res.join(' '));

// var nb = +input.shift(); /*?*/
// console.log(
//     input.map(Number)
//     .sort((a, b) => b - a)
//     .reduce((a, e, i, arr) => {
//         a.push(i % 2 === 0 ? arr[i / 2] : arr[nb - 1 - (i - 1) / 2]);
//         return a;
//     }, [])
//     .join(' ')
// );

var nb = +input.shift(); /*?*/
console.log(
    input.map(Number)
    .sort((a, b) => b - a)
    .reduce((a, e, i, arr) => {
        i % 2 === 1 ? a.push(e) : a.unshift(e);
        return a;
    }, [])
    .join(' ')
);


//------------------------------------------------------------
var outfile = fs.readFileSync('201709/pb1/output1.txt').toString();
var output = outfile.split('\n');
output;
0 % 2; /*?*/
