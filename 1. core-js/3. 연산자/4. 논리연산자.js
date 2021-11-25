
// && : AND연산
var t = true, f = false;

console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

// || : or연산자
console.log('=====================');

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산 (!) : 논리반전
console.log('=====================');

console.log(!t);
console.log(!f);

var money = 1000;
if (money) {
    console.log('나는 돈이 있어요~');
} else {
    console.log('나는 그지에요~~');
}