input = 9;
var l = '-'.repeat(input);

for(var i=0;i<(input-1)/2;i++){
    console.log('-'.repeat(i)+'#'+'-'.repeat(input-2-2*i)+'#'+'-'.repeat(i));
}
console.log('-'.repeat(input/2)+'#'+'-'.repeat(input/2));
for(var i=(input-1)/2-1;i>=0;i--){
    console.log('-'.repeat(i)+'#'+'-'.repeat(input-2-2*i)+'#'+'-'.repeat(i));
}

