

var weekDays = ['월', '화', '수', '목', '금', '토', '일',];

for (var day of weekDays) {
    console.log(day + '요일');
}

/*
for (i = 0; i < weekDays.length; i++) {
    console.log(weekDays[i] + '요일');
}
*/

console.log('=====================');

var foods = ['짜장면', '짬뽕', '볶음밥'];

// '짜장면과 짬뽕과 볶음밥!!'

// 완성된 문자를 저장할 변수
var result = '';


for (var i = 0; i < foods.length; i++) {
    if (i === foods.length -1) {
        result += (foods[i] + '!!')
    } else {
        result += (foods[i] + '과 ');
    }
}
console.log(result);