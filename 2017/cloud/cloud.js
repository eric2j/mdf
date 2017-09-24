var fs = require('fs');
var sfile = fs.readFileSync('2017/cloud/input1.txt').toString();
var input = sfile.split('\n');
var nbPers = input.shift(); /*?*/


var m = [0,0,0,0];
var n = ['M','AM','S','N'];
input.forEach(e=>{
    if (e<'05:30') m[3]++;
    else if (e<'12:00')  m[0]++;
    else if (e<'18:00') m[1]++;
    else if (e<'23:30') m[2]++;
    else if (e<'23:59') m[3]++;
});
m;
var idx=-1,max=0;
m.forEach((e,i)=>{
    if(e>max){
        idx=i;
        max=e;
    }
});
idx;
console.log(n[idx]);

'16:35'<'16:36'; /*?*/

