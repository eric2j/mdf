var input = 7;

for (var i = 1; i<input/2; i++) {
    console.log( '.'.repeat(Math.floor((input-(i*2-1))/2)) + '*'.repeat(i*2-1) + '.'.repeat(Math.floor((input-(i*2-1))/2)));
}
console.log('*'.repeat(input));
for (var i = Math.floor(input/2); i>0; i--) {
    console.log( '.'.repeat(Math.floor((input-(i*2-1))/2)) + '*'.repeat(i*2-1) + '.'.repeat(Math.floor((input-(i*2-1))/2)));
}
