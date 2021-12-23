
//========================= 함수, 전역변수 정의부 =========================//
// 할 일 목록 데이터
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    }, 
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];


// 새 할 일의 아이디값을 생성하는 함수
function makeNewId() {
    if (todos.length >= 1) {
        // 기존의 맨 마지막 데이터 할 일의 id값 + 1
        const newId = todos[todos.length - 1].id + 1;
        return newId;
    } else {
        return 1;
    }
}

// 새로운 할 일을 화면에 렌더링하는 함수
function renderNewTodo(newTodo) {

    const $newLi = document.createElement('li');
    $newLi.classList.add('todo-list-item');
    $newLi.dataset.id = newTodo.id;

    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newTodo.text}</span>
        </label>
        <div class="modify">
            <span class="lnr lnr-undo"></span>
        </div>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;

    const $toDoList = document.querySelector('.todo-list');
    $toDoList.appendChild($newLi);

    
}


// 할 일 추가 기능 처리
function insertToDoDaTa() {

    // 1. 데이터 처리
    const $todoText = document.getElementById('todo-text');
    const newTodo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newTodo);

    //2. 화면에 데이터 렌더링
    renderNewTodo(newTodo);

    //3. 입력창 비우기
    $todoText.value = '';
}


// data- id를 통해 해당 아이디를 가진 객체의 인덱스 번호 찾기
function findIndexById(dataId) {
    for (let i = 0; i < todos.length; i++) {
        if (dataId === todos[i].id) {
            return i;
        }
    }
    return null; // 못찾았다.
}

// 할 일 완료 변화 처리
function changeCheckState($label) {

    /*
        # CSS 렌더링 처리
        1. 지금 내가 체크한 체크박스를 포함하고 있는 label 태그를 찾아서
            클래스 checked 를 부여해야합니다.
        2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알아야 합니다.
            그러면 label 을 찾아낼 수 있습니다.
        3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다. ?? 그럼 누가 알까요 ?
    */
    $label.classList.toggle('checked');

    /*
        # 데이터 변동 처리
        1. 지금 css만 변했지 실제 데이터는 변하지 않았음.
        2. todos 배열에 있는 변동된 객체를 찾아서 done프로퍼티의 값을
            반대로 바꿔주는 처리가 필요함.
        3. 지금 체크한 태그의 정보를 확인해서 실제 배열에서 해당 객체를
            찾아낸 후 done을 수정해야 함.
        4. 그러면 어떻게 지금 클릭한 체크박스정보를 가진 객체를 탐색할 수 있을까 ?
        5. id정보를 알면 가능하다.
    */
    // 클릭한 체크박스의 data-id 값 확보
    const dataId = +$label.parentElement.dataset.id;

    const idx = findIndexById(dataId);
    todos[idx].done = !todos[idx].done;

}

// 삭제 처리 함수
function removeTodoData($targetLi) {

    // 1. 화면처리: ul에서 눌린 삭제버튼에 해당하는 li를 제거
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.removeChild($targetLi);
    // $targetLi.parentElement.removeChild($targetLi);  // 이것도 가능 꼭 변수에 안넣어줘도 됨
    
    // 2. 데이터처리 : 배열에서 제거된 li정보를 가진 객체 제거
    todos.splice(findIndexById(+$targetLi.dataset.id), 1);

    console.log(todos);
}

// 수정 처리 함수
/*
    #수정 모드 진입
    1. 새로고침같이 생긴 녹색버튼에 클릭이벤트 부여
    2. 클릭하면 텍스트창이 입력창으로 바뀌어야 한다.
        -> span.text가 input으로 교체되어야함.
    3. 아이콘이 확인아이콘으로 변경되어야함.
        -> lnr 클래스가 교체되어야 함.

    #수정 완료 이벤트
    1. input에 입력된 수정 후 텍스트를 뽑아서 다시 span.text로 교체
    2. 아이콘도 원래대로 교체 -> 클래스 교체
    3. 배열에서도 텍스트 수정
lnr-checkmark-circle
class=modify-input
*/
// 수정 모드 진입 처리
function enterModifyMode($modSpan) {
    // 1. span의 클래스를 교체하여 버튼아이콘 이미지 변경  (클래스조작)
    $modSpan.classList.replace('lnr-undo', 'lnr-checkmark-circle');
    
    // 교체 대상 span.text
    const $textSpan = $modSpan.parentElement.previousElementSibling.lastElementChild;
    // console.log($textSpan);

    //input만들기 
    const $modInput = document.createElement('input'); // <input>
    $modInput.setAttribute('type', 'text'); // <input type='text'>
    $modInput.classList.add('modify-input'); // <input type='text' class='modify-input>
    $modInput.setAttribute('value', $textSpan.textContent);

    // 노드교체
    const $label = $textSpan.parentElement;
    $label.replaceChild($modInput, $textSpan);
    
}

// 수정 완료처리 함수
function modifyTodoData($modSpan) {
    // 1. span의 클래스를 교체하여 버튼아이콘 이미지 변경  (클래스조작)
    $modSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');
    
    // 교체 대상 input
    const $modInput = $modSpan.parentElement.previousElementSibling.lastElementChild;
    // console.log($textSpan);

    //span만들기 
    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;

    // 노드교체
    const $label = $modInput.parentElement;
    $label.replaceChild($textSpan, $modInput);
    
    // 2. 데이터 처리 (배열 내부 객체 text프로퍼티 수정)
    const index = findIndexById(+$label.parentElement.dataset.id);
    todos[index].text = $textSpan.textContent;
};



//============================== 메인 실행부 ==============================//
(function() {

    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();  // 클릭했을때 서버에 submit을 하기때문에 이것을 막아줌
        // <form> 안에 <button>이 있으면 자동으로 submit이 된다 
        
        insertToDoDaTa();

    });

    // 할 일 완료 이벤트
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.addEventListener('change', e => {
        if (!e.target.matches('input[type=checkbox]')) return;
        changeCheckState(e.target.parentElement);
    });

    // 할 일 수정 / 삭제버튼 클릭 이벤트
    $toDoList.addEventListener('click', e => {
        
        if (e.target.matches('span.lnr-cross-circle')) {
            removeTodoData(e.target.parentElement.parentElement); // 삭제처리
        } else if (e.target.matches('div.modify span.lnr-undo')) {
            enterModifyMode(e.target);   // 수정 모드 진입처리                   
        } else if (e.target.matches('div.modify span.lnr-checkmark-circle')) {
            modifyTodoData(e.target);  // 수정 완료 처리
        }
    });

})();