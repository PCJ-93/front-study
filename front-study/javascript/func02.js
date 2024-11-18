

function arrForEach( func ){
    let arr = [10,20,30,40];

    for(let i in arr){
        //i      : index 배열기준에서 접근 key
        //arr[i] : 내부에 있는 데이터 (value)
        func(arr[i],i);
    }
}

const innerFunc = (item, index)=>{
    console.log(item + " " + index);
}
//innerFunc(10, 10);
arrForEach(innerFunc);

arrForEach( (a, b)=>{
    console.log(a+"-----"+b);
} );



//setTimeout( 함수, 시간 ) : 일정시간 이후 함수가 실행
// 시간 ms 단위 1000 => 1초
// const cb = ()=>{
//     console.log('callback 함수');
// }

// const outCallback = (stcb) =>{
//     console.log('out callback 실행할거 다하고');
//     stcb();
// };

// setTimeout(
//     ()=>{

//         console.log('함수실행');
//         outCallback(cb);
//     },
//     2000
// );


const test1 = ()=>{
    console.log('연습용 마지막에불러오기용');
}

const test2 = (test1cd)=>{
    console.log('연습용 할거다하고');
    test1cd();
}

setTimeout(
    ()=>{
        console.log('연습용');
        test2(test1);
    },
    2000
);

