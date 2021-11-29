
// 실행순서 1  ;   2   ;  4
for (var i = 1; i <= 5; i++) {
    console.log('안녕' + i);   // 3;
}

console.log('==============================');

var i = 1;  // 1제어변수 (start)
while ( i <= 5) { // 2조건식 (end)
    console.log('안녕' + i); //3 
    i++; // 4증감식  (step)
}


console.log('==============================');

var level = 5;

// n은 1부터 9까지 1씩 증가하면서 반복

for (var n = 1; n <= 9; n++) {
    console.log(`${level} x ${n} = ${level * n}`);
}