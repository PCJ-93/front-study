// 자바스크립트는 자바랑 다르게 배열의 인덱스 수를 동적으로 조작할수 있다 함수를사용해서..

// 자바스크립트에 배열을 조작하는 함수
// 배열의 맨앞  삭제 shift 추가 unshift
// 배열의 맨뒤  삭제 pop   추가 push

let arr = [1,2,3];
// 추가
// arr.push();     // 배열 뒤에 값 추가
// arr.unshift();  // 배열 앞에 값 추가

console.log(arr);
arr.push(10);      // 배열 뒤에 값 추가
arr.unshift(20);   // 배열 앞에 값 추가
console.log(arr);

// 삭제
// arr.pop();    // 배열 뒤에 값 삭제
// arr.shift();  // 배열 앞에 값 삭제

arr.pop();       // 배열 뒤에 값 삭제
arr.shift();     // 배열 앞에 값 삭제
console.log(arr);

let shiftItem = arr.shift();   // 삭제 하는 값을 변수에 담을수도있다.
console.log(shiftItem);
console.log(arr.pop());
console.log(arr.shift());



// 배열 이어붙이기 함수
// concat();
// concat(a.concat(b));
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2));


// 배열 앞 뒤로 추가 방법
// [~, ...a, ~]
let arr3 = [80, 70, ...arr1, 90, 15];  // [80, 70, 1, 2, 3, 90, 15] 처럼 arr1을 분해해서 사용하는방식 이라고 생각하면 편하다
console.log(arr3);


//============================================================================================
//  깊은복사  ,  얕은복사
// deep copy , shallow copy

// let arr4 = arr1;
// console.log(arr1);
// console.log(arr4);
// arr4[2] = 30;
// console.log(arr1);
// console.log(arr4);  // 4의 2인덱스만 바꾼건데 1것까지 바뀜

let arr4 = [...arr1];
console.log(arr1);
console.log(arr4);
arr4[2] = 30;
console.log(arr1);  // 4 의 2인덱스만 바뀜
console.log(arr4);  // 주소가 아니라 배열 자체에 값으로 새로운 배열 (깊은복사)


// splice 함수(메소드)
// 특정위치에 값을 추가하거나,삭제할수 있는 함수
// 삭제만: splice(인덱스, 부터몇개삭제할개수)
// 추가만: splice(인덱스위치, 0, 추가값)
// 삭제후 추가: splice(위치인덱스, 삭제할갯수, 추가값)

let arr5 = [1,2,3,4,5];

console.log(arr5);
arr5.splice(1, 2);  // 1인덱스 부터 2개 삭제
console.log(arr5);
arr5.splice(1, 1, 30); // splice(위치인덱스, 삭제할갯수, 추가값)
// = arr5[1] = 30;
console.log(arr5);
arr5.splice(2, 0, 40);  // 2인덱스위치, 삭제는 0개, 40값 추가
console.log(arr5);



// 빈 함수에 객체 추가/변경/삭제
// 삭제는 delete 함수명.객체이름;
console.log('===================================================');
let obj = {};
console.log(obj);

obj.menu = "김밥";     // 값 추가
obj.price = 3500;
obj.location = "큰길";

obj.price = 3800;  // 김밥가격변경(수정) / 그냥 변수에 재저장

console.log(obj);

delete obj.menu;   // 키값(메뉴) 삭제

console.log(obj);



// ===============================================================
console.log('--------------------------------------------------------');
// 표준 내장 객체  //ex) String.valueOf, Integer.parseInt , Math.round
// 날짜와 시간 나오는 Date 객체
let today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()+1);  // 0~11 로 센다.  0=1월
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

// String.valueOf
// Integer.parseInt 
console.log(Math.round(1.55));
console.log(Math.trunc(123.123));
