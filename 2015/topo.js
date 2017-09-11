var fs = require('fs');
var sfile = fs.readFileSync('2015/topo-in0.txt').toString();
var input = sfile.split('\n');
input.shift();
input; /*?*/
var m = [];
for (var i=0; i<input.length; i++) {
    m[i] = input[i].split(' ')
}
m;
var coupe=false;
for ( var i = 0; i<m.length; i++){

    for (var j=i+1 ; j< m.length; j++){

        var d = Math.sqrt( Math.pow(parseInt(m[j][0])-parseInt(m[i][0]),2) + Math.pow(parseInt(m[j][1])-parseInt(m[i][1]),2) );
        d;
        var R = Math.abs(parseInt(m[j][2])+parseInt(m[i][2]));
        R;
        var r = Math.abs(parseInt(m[j][2])-parseInt(m[i][2]));
        r;
        if(d<R && d>r){
            coupe=true;
            break;
        }
    }
    if(coupe)break;
}
console.log(coupe?'KO':'OK');