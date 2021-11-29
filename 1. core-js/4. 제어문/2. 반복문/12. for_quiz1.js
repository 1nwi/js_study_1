
var number = +prompt('정숫값 :')
var count = 0;
var result = '';

for (var x = 1; x <= number; x++) {
    if (number % x == 0) {
        result += (x + '\n');
        count++;
    }
    
}
// alert(`${result}${number}의약수는${count}개입니다.`);
alert(result + number + `의 약수는 ${count}개입니다.`);
