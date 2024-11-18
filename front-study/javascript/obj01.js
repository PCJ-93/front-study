

let scores = [10, 30, 50, 40];

console.log(scores[0]);


//object 타입
//JSON : 자바스크립트 오브젝트 노테이션
//{ key : value }

let weather = '맑음';
console.log(weather);

let weatherInfo = {
    weather : '맑음',
    temp : 2,
    location : 'cheonan'
};

console.log(weatherInfo.weather);
console.log(weatherInfo.temp);
console.log(weatherInfo.location);

//점심식사정보    짜장면 5000 대천반점 천안시장내부
let lunchInfo = {
    menu : '짜장면',
    price : 5000,
    shop : "대천반점",
    location : '천안시장내부'
};

console.log(lunchInfo.price);
console.log(lunchInfo.menu);
console.log(lunchInfo.shop);

// 객체 , 배열          []:배열 , {}:객체 이런식으로 보면 된다.
//  둘이 접목
// 객체안에 배열
// 배열안에 객체

// 1) 객체안에 배열
let shopInfo = {
    name : '대천반점',
    location : '천안시장내부',
    menu : ['짜장면', '짬뽕', '볶음밥']
};
console.log(shopInfo.location);
console.log(shopInfo.menu[1]);  // 객체안에 배열 호출


// 2) 배열안에 객체
let shopInfo2 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [                      // 메뉴 배열 안에 메뉴
        {
            name :'짜장면',             // 메뉴 안에 이름,가격
            price: 5000
        },
        {
            name : '짬뽕',
            price : 7000
        },
        {
            name : '볶음밥',
            price : 7000
        }
    ]
};
console.log(shopInfo2.menu);  // 메뉴배열정보
console.log(shopInfo2.menu[2]); // 메뉴배열[2] -> 볶음밥
console.log(shopInfo2.menu[2].price);  // 볶음밥 가격만


// 객체안에 배열 안에 배열
let shopInfo3 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [                      // 메뉴 배열 안에 메뉴
        {
            name :'짜장면',             // 메뉴 안에 이름,가격
            price: 5000,
            raw : ['춘장', '양파', '돼지고기']
        },
        {
            name : '짬뽕',
            price : 7000,
            raw : ['오징어', '면', '고춧가루']
        },
        {
            name : '볶음밥',
            price : 7000,
            raw : ['달걀', '당근', '감자']
        }
    ]
};
console.log(shopInfo3.menu[0].raw);   //짜장면 재료들 출력
console.log(shopInfo3.menu[0].raw[1]);  // 재료중 양파만 출력


let shopList = [
    {
        name : '대천반점',
        location : '천안시장내부',
        menu : [                      // 메뉴 배열 안에 메뉴
            {
                name :'짜장면',             // 메뉴 안에 이름,가격
                price: 5000,
                raw : ['춘장', '양파', '돼지고기']
            },
            {
                name : '짬뽕',
                price : 7000,
                raw : ['오징어', '면', '고춧가루']
            },
            {
                name : '볶음밥',
                price : 7000,
                raw : ['달걀', '당근', '감자']
            }
        ]
    },
    {
        name : '맘스터치',
        location : '천안길가에',
        menu : [                      // 메뉴 배열 안에 메뉴
            {
                name :'싸이버거',             // 메뉴 안에 이름,가격
                price: 6000,
                raw : ['빵', '채소', '닭다리살']
            },
            {
                name : '휠렛',
                price : 5000,
                raw : ['빵', '채소', '닭가슴살']
            }
        ]
    }
];
// 휠렛버거의 가격
console.log(shopList[1].menu[1].price);
// 볶음밥의 재료들
console.log(shopList[0].menu[2].raw);
// 싸이버거의 재료중에 닭다리살 찾기
console.log(shopList[1].menu[0].raw[2]);
// 대천반점의 위치
console.log(shopList[0].location);
