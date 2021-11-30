

var rn = Math.floor(Math.random() * 8) + 2;

console.log('=====================');
console.log(`랜덤 구구단 ${rn}단`);
console.log('=====================');


for (var n = 1; n <= 9; n++) {
    console.log(`${rn} x ${n} = ${rn * n}`);
}