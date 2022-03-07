// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
// 타입 별칭으로 정의
type Person1 = {
  name: string;
  age: number;
};

// 인터페이스로 정의 
interface Person2 {
  name: string;
  age: number;
};

let chang1: Person1 = {
  name: "챙",
  age: 20,
};
let chang2: Person2 = {
  name: '챙',
  age: 20
}


// 모든 타입에는 별칭을 붙일 수 있다.
type MyString = string;
let str1: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
  // ..
}

// 타입 별칭은 확장(상속)이 불가능하다.
// 인터페이스는 확장(상속)이 가능하다.

function getPerson(): Person1 {
  // ...
}

// #3
type Hero = {
  skill: string;
}

const capt: Hero = { 
  // skill: 'throwing a shield' 
}