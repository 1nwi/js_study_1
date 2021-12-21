
/*
# 준비할 데이터(변수)
1. 1 ~ 100사이의 랜덤 정답 1개
2. 누른 아이콘 숫자번호 
3. 범위를 만들어주기 위해 최소값, 최대값

# 아이콘 클릭 이벤트
0. 클릭 이벤트를 100군데 다 걸것인가?
 -> No!. 버블링을 사용하면 부모에 1번만 걸면 된다.

1. 클릭한 아이콘 노드 정보를 어떻게 취득할 것인가?
 -> e.target.textContent

2. 클릭한 아이콘 숫자와 실제 정답을 대조한다.

2-1. UP일 경우
 ==> 클릭한 아이콘 포함 이전 형제 아이콘을 전부 제거한다. 
 ==> min데이터값을 클릭한 숫자 + 1 값으로 변경
 ==> UP 아이콘에 애니메이션을 추가하여 UP인 상황을 사용자에게 인지시킨다.
 
2-2. DOWN일 경우
 ==> 클릭한 아이콘 포함 다음 형제 아이콘을 전부 제거한다. 
 ==> min데이터값을 클릭한 숫자 - 1 값으로 변경
 ==> DOWN 아이콘에 애니메이션을 추가하여 DOWN인 상황을 사용자에게 인지시킨다.

2-3. 정답일 경우
 ==> 

*/
//===================== 함수, 전역변수 정의부 =========================//

// 게임 데이터 변수 (정답, 선택한숫자, 최소값, 최대값)
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1, // 실제 정답
    min: 1,
    max: 100,
    answer: null  // 사용자가 클릭한 아이콘 숫자
};

// 숫자 아이콘 생성 함수
function makeIcons() {
    // 아이콘 태그 생성 <div class="icon">1</div>

    const $numbers = document.getElementById('numbers');

    for (let n = 1; n <= 100; n++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = n;
        $numbers.appendChild($div);
    }
}

// 범위 밖의 아이콘 삭제 처리
function clearIcons(target, isup) {
    // up일 경우 지금 누른 아이콘 포함 이전 형제를 모두 제거
    // down일 경우 지금 누른 아이콘 포함 다음 형제를 모두 제거
    const $numbers = document.getElementById('numbers');

    let $delTarget = target;
    
    while ($delTarget) {
        let $nextTarget =
            isup ? $delTarget.previousElementSibling : $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;        
    }
}


// UP DOWN 인 경우의 처리
function processUpDownCase(isup, target) {
    // 1. 애니메이션 처리
    const $up = document.getElementById('up');
    const $down = document.getElementById('down');
    
    if (isup) { // up이면?
        $up.classList.add('selected');
        $down.classList.remove('selected');
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent = gameDatas.min;
    } else { // down이면?
        $down.classList.add('selected');
        $up.classList.remove('selected');
        gameDatas.max = gameDatas.answer - 1;
        document.getElementById('end').textContent = gameDatas.max;
    }

    clearIcons(target, isup);
}

// 정답인 경우 처리할 일
function processCorrect(target) {
    // 1. 축하박스 등장 처리
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    // 2. target에 id = "move" 부여
    target.setAttribute('id', 'move');
}

// 정답을 검증하는 함수
function checkAnswer(target) {

    // 객체 디스트럭쳐링
    const {secret, answer} = gameDatas;
        
    if (secret === answer) { //정답인 경우
        processCorrect(target);
    } else if (secret > answer) { // UP인 경우
        processUpDownCase(true, target);
    } else { // DOWN인 경우
        processUpDownCase(false, target);
    }
}


//========================== 메인 실행부 ============================//
(function() {

    makeIcons();

    //아이콘 클릭 이벤트 부여
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        if (!e.target.matches('#numbers .icon')) return;
        
        // 사용자가 선택한 숫자를 객체에 저장
        gameDatas.answer = +e.target.textContent;

        // 정답 검증
        checkAnswer(e.target);

    });

})();
