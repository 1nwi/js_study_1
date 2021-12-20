
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



//========================== 메인 실행부 ============================//
(function() {

    makeIcons();

    //아이콘 클릭 이벤트 부여

})();
