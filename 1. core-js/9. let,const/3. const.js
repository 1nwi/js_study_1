
// const 는 선언과 동시에 초기화 해야함.
// 상수 : 불변의 고정값
const SALE_RATE = 0.2;  // 할인율 20%

const PI = 3.14159265; // 원주율

// sale_rate = 0.3;

console.log(`sale_rate : ${SALE_RATE}`);

// const 와 객체 (배열, 객체, 함수)
const person = {
    name: '김철수',
    age: '30'
};

// person = {
//     name: '박영희',
//     age: 20;
// };

person.name = '고길동';
console.log(person);

// ####### 정리 #######
// 처음 변수 만들때 const를 만들고 만약 바꿔야 된다면 let 으로 변경해줘라
// for문 같이 반복해야 하는 경우에는 let 으로 만들어야 값이 변함
// ex) for (let i = 0; i <= 10; 1++) {} 