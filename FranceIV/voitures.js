var input = []
//-----------------------------------------------------------------------------
input.shift();
console.log(input.reduce((a,e)=>a+=parseInt(e),0));
