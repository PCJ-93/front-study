

function func01(){
    console.log('func01');
}

func01();

function func01_2(){
    return "func01_2";
}
console.log(func01_2());

const func02 = function func002() {
    console.log('func02');
}
func02();

const func02_2 = function() {
    console.log('func02_2');
}
func02_2();


const  func03 = ()=>{
    console.log('func03');
}
func03();


//매개변수 / 인수
function func05(a, b){
    console.log(a + " " + b);
}
func05(10, 20);
func05("E", "T");

const func06 = function func006(a, b){
    console.log(a + " " + b);
}
func06(30, 40);

const func07 = function (a, b){
    console.log(a + " " + b);
}
func07(80, 40);

const func08 = (a, b)=>{
    console.log(a + " " + b);
}
func08(100, 150);


function func10(a, b){
    console.log(a + " + b");
}
func01(10, 20);

function func11(a, b){
    console.log(a);
    b();
}

function temp(){
    console.log('temp func');
}

// function temp2(t){
//     //code
//     console.log('temp2 func');
//     //code
//     //10s
//     t();  // 콜백
// }
// func11(100, temp);


// callback 함수 (나중에 실행 할 함수)

// temp2 함수를 실행하고나서 temp 함수를 실행
function temp2(t){ // 매개변수넣어주고
    //code~~
    console.log('temp2 func');
    //code~~
    //10s딜레이주는코드~
    t();  // 콜백함수로 코드마지막에 호출
}
temp2(temp);
//temp();

temp2(()=>{
    console.log('그냥 바로 만들어서 넣은 함수');
});





