var input = [4,'trete','ytuytuytuy','io','lkjlkl'];
//input.shift();
input;
var m = input.reduce((a,e)=>
    e.length>a?e.length:a
,0);
console.log(m)