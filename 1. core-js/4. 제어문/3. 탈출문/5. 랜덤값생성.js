

// 난수 (랜덤값) 생성
// Math.random() : 0.0이상 1.0미만의 실수 난수를 생성

var rn = Math.random();
console.log(`랜덤값: ${rn}`);

if (rn > 0.66) {
    console.log('오늘 저녁은 삼겹살');
} else if (rn > 0.33) {
    console.log('오늘 저녁은 단무지');
} else {
    console.log('오늘 저녁은 굶어!');
}

console.log('=======================');

// 내림, 올림, 반올림
console.log(Math.floor(3.789)); //내림
console.log(Math.ceil(5.289)); //올림
console.log(Math.round(7.6)); //반올림

console.log('=======================');

/*
    # 1이상 10이하의 랜덤 정수 생성

    Math.random()                           -> 0.0 <= ~ < 1.0
    Math.random() * 10                      -> 0.0 <= ~ < 10.0
    Math.floor(Math.random() * 10)          ->  0  <= ~ < 10
    Math.floor(Math.random() * 10) + 1      ->  1  <= ~ < 11
*/

var num = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤정수: ${num}`);

/*
    # 랜덤 정수 범위 공식

    - x 이상 y 이하의 랜덤 정수

    - Math.floor(Math.random() * (y - x + 1)) + x
*/

