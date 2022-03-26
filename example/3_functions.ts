// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수 타입 정의하기 (반환값을 "타입추론" 해준다)
function add(a: number, b: number) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입 정의하기
function add(a: number, b: number): number {
  return a + b;
}

// 함수의 인자 개수 자동 체크
add(10, 20, 30, 40);

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
log("a", 10);

// 함수 옵셔널 파라미터(optional parameter)
// ? : 필요에 따라 인자가 더 있을 수 있다 (선택적인 인자)
function printText(text: string, text2?: string, text3?: string) {
  console.log(text);
}
printText("hi");
printText("hi", "chang");


// ========

// ES5 - 함수 선언문
function sum(a,b) { 
  return a + b;
}

// ES5 - 함수 표현식
var sum = function(a,b) {
  return a + b;
}

// ES6+ - 함수 표현식(화살표 함수)
var sum = (a, b) => {
  return a + b;
}
var sum = (a, b) => a + b;

// 타입스크립트의 화살표 함수
var sum = (a: number, b: number): number => {
  return a + b;
}