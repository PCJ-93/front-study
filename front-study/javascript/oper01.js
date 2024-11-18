//operator

//비교연산자
let x = 10;
let y = 10;
let z = '10';

//  == : 값이같으면 true
console.log(x == y);  //t
console.log(x == z);  //t
console.log(x === y); //t  -- 같은숫자 && 같은타입
console.log(x === z); //f  -- 같은숫자인데 숫자타입 문자타입 타입달라서 false
// === : 값과 타입이 같아야 true

// != : 값이 다르냐  //  !== : 값과타입이 다르냐


console.log( 1==1 && 2==2); //t
//  a && b  둘다 참 -> 참
//  a || b  둘다 거짓 -> 거짓

// if문 대신에 사용가능
console.log( 1==1 && 10 );  //10
console.log( 1!=1 && 10 );  //false

console.log( 1!=1 || 20 );  //20
console.log( 1==1 || 20 );  //true


//조건 참 -> A실행
let a = 10;
//조건 a == 10 이면 -> A실행
if(a == 10){
    console.log("A");
}
//조건 a == 10 이면 -> A실행  js논리연산자
a == 10 && console.log("A");


let q = 10;
let w = '20';
let e = 30;
console.log(q+w);
console.log(q+e);
console.log(q+''+e); // 암시적형변환

console.log(q+String(e));  //문자로      // 명시적형변환
console.log(q+Number(w));  //숫자로

console.log(Number("123"));
console.log(Number("123.456"));



