//

function fff(){
    console.log(1);
    console.log(2);
    //return;
    //console.log(3);

    return 3;
}

let result = fff();
console.log(result);


const af = ()=>{   //화살표함수
    console.log(4);
    console.log(5);
    return 6;
}
console.log(af());

// ()=> 7; 은 리턴이 생략 ==   () => { return 7; } 
//const af2 = () =>7;
const af2 = ()=>1+2+3+4;
console.log(af2());



//스코프, 호이스팅  (지역변수,전역변수 랑 비슷한거) 
// function scope1(){  // x
//     let x = 10;
// }
// console.log(x);

// if(true){          // x
//     let y = 300;
// }
// console.log(y);

let z = 300;       // o
if(true){
    console.log(z);
}

function scope2(){
    console.log(z);
}
scope2();

{
    let qqq = 100;
}
//console.log(qqq);


//호이스팅
ccc = 3000;
var ccc;              // var 는 변수 선언하면 맨위로보내는 호이스팅 효과가 있다
console.log(ccc);     // 그래서 변수선언전에 ccc에 대입해도 불러짐

// dd = 30;              // let 이나 const 는 안됨 호이스팅효과없음
// let dd;              // 에러
// console.log(dd);


check();
function check(){
    console.log('check');
}
check();



// 1회용 함수 쓴곳만 사용하고 그 밑에서 부터는 함수 호출해도 안됨 (에러)
(function(){
    console.log('1회용 함수');
})();

(function oneuse(){
    console.log('1회용 함수');
})();
//oneuse();  // 안됨 에러