

var start = +prompt('첫번째 숫자를 입력!: ');
var end = +prompt('두번쨰 숫자를 입력!: ');
var total = 0;
var num = start;


while (num <= end) {
    total += num;
    num++; 
}
alert(`${start} ~ ${end}까지의 총합: ${total}`)