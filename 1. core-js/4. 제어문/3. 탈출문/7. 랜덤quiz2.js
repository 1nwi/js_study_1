

var rn = Math.floor(Math.random() * 50) + 1;

alert('[ UP & DOWN 게임 - 1 ~ 50 사이의 숫자 중 어떤 숫자가 들어있을까요??? ]');
alert('[ 난이도를 설정하세요 ~~~! ]');
var level = +prompt('[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]');

var count = '';
if (level === 1) {
    count += 3;
} else if (level === 2) {
    count += 6;
} else if (level === 3) {
    count += 10;
}
var maximum = 50;
var minimum = 1; 

while (true) {
    
    var number = +prompt(`[ ${minimum} ~ ${maximum} 사이의 무작위 숫자를 ${count}번 안에 맞춰보세요!! ]`);
    if (count === 1) {
        alert('기회를 모두 소진했습니다. 계속 문제를 풀어주세요!!')
    }
    if (rn === number) {
        alert('딩동댕~~~~ !!');
        if (count > 1) {
            alert('YOU WIN!')
        } else if (count < 1) {
            alert('YOU LOSE!')
        }
        break;
    } else if (rn < number) {
        count--;
        alert('DOWN!!!!');
        alert(`기회가 ${count} 남았습니다.`)
        maximum = number;
        continue;
    } else {
        count--;
        alert('UP!!!!');
        alert(`기회가 ${count} 남았습니다.`)
        minimum = number;
        continue;
    }
}