// 이넘(Enum)
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;


// 숫자형 이넘
// 별도의 값을 지정(초기화)하지 않으면, 숫자형으로 취급된다 (기본값 0부터 시작하여 1씩 증가)
enum Shoes1 {
  Nike, // 0
  Adidas, // 1
  NewBalance, // 2 
  Fila = 10, // 초기화
  Reebok, // 11
}
let myShoes1 = Shoes1.Nike;
console.log(myShoes1); // 0


// 문자형 이넘
// 따로 문자형으로 초기화하면 됨
enum Shoes2 {
  Nike = "나이키",
  Adidas = "아디다스",
  NewBalance = "newBalance",
}
let myShoes2 = Shoes2.Nike;
console.log(myShoes2); // '나이키'


// 이넘 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}

askQuestion('Yes'); // X - Enum에서 제공하는 값만 가능
askQuestion("Y"); // X - Enum에서 제공하는 값만 가능
askQuestion(Answer.Yes); // O



// any
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion) = 타입 단언
// 타입스크립트가 추정한 타입 말고, 개발자가 as로 정의한 타입으로 추정되도록 함
let a;
a = 20;
a = 'a';
let b = a as string;

let str = '이건 문자열 타입이 됩니다.';

let num: number;
num = 'str' as any;

// DOM API 조작 시 타입 단언 활용
const divElement1 = document.querySelector('#app'); // 타입 추정 :  Element
const divElement2 = document.querySelector('div'); // 타입 추정 : HTMLDivElement
divElement1.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;


let divElement3 = document.querySelector('div'); // 타입 추론 : let divElement: HTMLDivElement | null => null일 수 있음
if (divElement3) { // div가 있는지, null이 아님을 보장 
  divElement3.innerText // div가 존재할때만 접근가능하도록 
}
divElement3?.innerText; // div가 존재할때만 접근가능하도록 

let divElement4 = document.querySelector('div') as HTMLDivElement; // null이 오지 못하도록 타입 단언
divElement4.innerText; // div 바로 접근가능 
