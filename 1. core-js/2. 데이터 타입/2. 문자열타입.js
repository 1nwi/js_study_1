

var greeting;
greeting = 'hello';
greeting = "안녕~~";
greeting = `잘가!`;

console.log(typeof greeting);

var str = '그는 나에게 "안녕"이라고 말했다.';
console.log(str);

var str2 = "let's Go!";
console.log(str2);

var str3 = "그는 나에게 \"안녕\"이라고 말했다.";
console.log(str3);

var str4 = 'let\'s Go! \"together\"';
console.log(str4);

// 탈출 문자
var str5 = '멍멍이\n\n\n야옹이';
console.log(str5);

var str6 = '멍멍이\t\t\t야옹이';
console.log(str6);

// 파일저장할때 경로를 적을경우 t로 시작하거나 n으로 시작하면 탈출문자가 적용되니 \를 하나더 붙여주면됨
var filePath = 'D:\\temp\\new.png';
console.log(filePath);

// 템플릿 리터럴 (ES6+ 문법)

// var tag= '<ul>\n\t<li><a href="#">네이버링크</a></li>\n</ul>';

var tag= `
<ul>
    <li>
        <a href="#">네이버링크</a>
    </li>
</ul>`;

console.log(tag);

var month = 3;
var day = 1;
var anniversary = '삼일절';

console.log(month + '월 '+ day + '일은 ' + anniversary + '입니다.');
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);
