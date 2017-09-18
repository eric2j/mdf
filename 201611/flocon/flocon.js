var fs = require('fs');
var sfile = fs.readFileSync('201611/flocon/input1.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
m=Math.floor(nb/2); /*?*/
for(var i=0; i<m+1;i++){
    console.log('.'.repeat(m-i)+'*'.repeat(nb-2*(m-i))+'.'.repeat(m-i));
}
for(var i=m-1; i>=0;i--){
    console.log('.'.repeat(m-i)+'*'.repeat(nb-2*(m-i))+'.'.repeat(m-i));
}