
let scores = [10, 30, 50, 40];

// for 반복문
for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

// for .. in
for(let i in scores){     //향상된 for문 1
    console.log(i + ' ' + scores[i]);
}

// for .. of  //변수명을 item value score
for(let item of scores){  //for(String item : stringArr)
    console.log(item);    // 향상된 for문 2
}

//forEach
scores.forEach( (item, index)=>{
    console.log(item + ' ' + index);
} );



