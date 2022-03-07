// 인터페이스
interface User {
  name: string;
  age: number;
}


// 변수에 인터페이스 활용
const seho: User = { 
  name: 'hi', 
  age: 100 
};


// 함수의 매개변수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
getUser(seho);


// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  // (인자) 반환타입
  (a: number, b: number): number;
}
let sum2: SumFunction;
sum2 = function (num1: number, num2: number): number {
  return num1 + num2;
};


// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  // 문자열 배열이며, 각각 인덱스는 숫자형
  [index: number]: string;
}
let arr1: StringArray = ['a', 'b', 'c'];
let arr: StringArray;
arr[0] = 'hi';
arr[1] = 10; // string 형식이 아니기 때문에 에러


// 딕셔너리 패턴
interface StringRegexDictionary {
  // 키는 문자열, 값은 정규표현식형을 가짐
  [key: string]: RegExp
}
let obj2: StringRegexDictionary = {
  something: /abc/,
  cssFile: /\.css$/,
  jsFile: 'js', // RegExp 형식이 아니기 때문에 에러
};


// 인터페이스 확장 (=상속)
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}

// interface Developer {
//   name: string;
//   age: number;
//   language: string;
// }
interface Developer extends Person {
  // name: string; // 필요없음
  // age: number; // 필요없음
  language: string;
}
const joo: Developer = { name: 'joo', age: 20, language: 'ts' };


