


alert('~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~\n[ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~ ]');

var select = +prompt('~~~~~ 난이도를 설정합니다. ~~~~~ \n [ 1. 상(1~100) | 2. 중(1~50) | 3. 하(1~20) ]');

var level;
if (select === 1) { 
    level = 100;
    alert('상 난이도로 설정 됩니다!! [ 1 ~ 100 ]');
} else if (select === 2) {
    level = 50;
    alert('중 난이도로 설정 됩니다!! [ 1 ~ 50 ]');
} else if (select === 3) {
    level = 20;
    alert('하 난이도로 설정 됩니다!! [ 1 ~ 20 ]');
} else {
    level = 999;
    alert('지옥난이도로 설정 됩니다!! [ 1 ~ 999 ]');
}


var qNum = 1;
var win = 0, lose = 0;

while (true) {
    var num1 = Math.floor(Math.random() * level) + 1;
    var num2 = Math.floor(Math.random() * level) + 1;

    var markNum = Math.floor(Math.random() * 3) + 1;
    if (markNum === 1) {
        var mark = '+';
        var answer = num1 + num2;
    } else if (markNum === 2) {
        var mark = '-';
        if (num1 === num2) {
            num2--;
        }
        var answer = num1 - num2;
    } else {
        var mark = 'x';
        var answer = num1 * num2;
    }


    var questions = +prompt(`Q${qNum} ${num1} ${mark} ${num2} = ??`)

    if (questions === 0) {
        alert(`게임을 종료합니다!\n정답횟수: ${win}, 틀린횟수: ${lose}`);
        break;
    }

    if (questions === answer) {
        alert('정답입니다!');
        win++;
    } else {
        alert('틀렸어요~');
        lose++;
    }
    qNum++;
    
    if (level === 20) {
        if (qNum > 10 && win > 9) {
            alert('난이도를 한단계 올립니다.');
            level = 50;
        } else if (lose === 20) {
            alert('숨겨진 최하위 단계로 시작됩니다. ');
            level = 10;
        }

    }
    
}

