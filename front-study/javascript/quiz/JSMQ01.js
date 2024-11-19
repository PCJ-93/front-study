//모닝퀴즈

// 아래 요구조건에 알맞는 함수를 작성하세요.
// 작성된 함수를 다양한 입력값으로 호출하고 그 결과를 출력하는 코드를 작성하세요.

// ※Javascript 에서 함수를 작성하는 여러가지 방식으로 다양하게 작성해보기

// 함수명 : getMealByTime
// 매개변수 : 현재 시간
// ※단, 시간은 0시~24시 기준으로 사용
// ex) 오후 2시 -> 14시
// 반환값 : 해당 시간에 해야하는 식사 구분

// *위 함수는 매개변수 있음, return 값 있음.

// 매개변수 시간별 조건에 따른 반환 값.

// 6시~10시 : 아침
// 11시~14시 : 점심
// 17시~20시 : 저녁
// 21시~23시 : 야식
// 위에 해당하지 않는 시간 : 금식

// 호출 및 사용 예시

// console.log(getMealByTime(5)); //출력값 : 금식
// console.log(getMealByTime(8)); //출력값 : 아침
// console.log(getMealByTime(13)); //출력값 : 점심
// console.log(getMealByTime(16)); //출력값 : 금식
// console.log(getMealByTime(19)); //출력값 : 저녁
// console.log(getMealByTime(22)); //출력값 : 야식
// console.log(getMealByTime(2)); //출력값 : 금식

// function getMealByTime(num) {        
//     if(num>=6&&num<=10){
//         console.log('아침');           // console.log 말고 return '~~'; 로 출력값 지정한다..
//     }else if(num>=7&&num<=14){
//         console.log('점심');
//     }else if(num>=17&&num<=20){
//         console.log('저녁');
//     }else if(num>=21&&num<=23){
//         console.log('야식');
//     }else{
//         console.log('금식');
//     }
// }

//console.log(getMealByTime());


// SOL
//종류별 함수선언
// function getMealByTime(time){

// }
// const getMealByTime = function(time){

// }
// const getMealByTime = function func(time){
    
// }
// const getMealByTime = (time)=>{
    
// }


function getMealByTime(num){
    if(num>=6&&num<=10){
        return '아침';
    }else if(num>=7&&num<=14){
        return '점심';
    }else if(num>=17&&num<=20){
        return '저녁';
    }else if(num>=21&&num<=23){
        return '야식';
    }else{
        return '금식';
    }
}

console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식
// 모닝퀴즈 끝


// 간단한 연습

// let arr1 = [10,'20',30];
// let arr2 = [10,'20',30];
// let arr3 = [10,20,30];
// let arr4 = ['10','20','30'];

// const compareArr = (arr1, arr2) =>{
//     for(let i=0; i<arr1.length; i++){
//         console.log( arr1[i] == arr2[i] );
//     }
// }
// 위 코드 출력 결과 예상

// 비교 1
// true
// true
// true
// 비교 2
// true
// true
// true
// 비교 3
// true
// true
// true

//=== 일경우는 ttt / fff / ftf


// const personInfo = {
//     name : "홍길동",
//     age : 25,
//     phone : ['010', '1234', '5678'],
//     engName : "JOHN SMITH",
//     nickname : "복습마왕"
// }
// console.log(personInfo);


// let phone = '010-1234-5678';
// let engName = 'John Smith';
// let nickname = " 복습마왕 ";
// const personInfo = {
//     name:"홍길동",
//     age:25,
//     phone: [phone.substring(0,3), phone.substring(4,8), phone.substring(9,13)],
//     engName: engName.toUpperCase(),
//     nickname: nickname.trim()
//     }
//     console.log(personInfo);


// SOL

const personInfo = {
    name:"홍길동",
    age:25,
    phone:"010-1234-5678",
    engName:"John Smith",
    nickname:" 복습마왕 "
    }

personInfo.nickname = personInfo.nickname.trim();
//trim 공백제거

personInfo.engName = personInfo.engName.toUpperCase();
//toUpperCase 모든문자를 대문자로변환

//personInfo.phone = [personInfo.phone.substring(0,3),personInfo.phone.substring(4,8),personInfo.phone.substring(9,13)];
//substring 문자열 자르기

// let s = '010-1234-5678';
// s.split('-');
// console.log(s.split('-'));
personInfo.phone = personInfo.phone.split("-");
//split - 를 기준으로 나눈것을 배열로 저장

console.log(personInfo);

