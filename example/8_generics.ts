function logText1(text) {
  console.log(text);
  return text;
}
logText1(10); // 숫자 10
logText1('hi'); // 문자열 hi
logText1(true); // 진위값 true


function logText2<T>(text: T): T {
  console.log(text);
  return text;
}
logText2('hi');
logText2<string>('hi'); // 호출하는 시점에 제네릭 정의됨
logText2<boolean>(true); // 호출하는 시점에 제네릭 정의됨


// 제네릭을 사용하는 이유 => 같은 형태의 함수를 타입만 다르다고 해서 중복해서 만드는 것보다, 제네릭 형태로 한번만 만드는 게 더 효율적임
function logSomething1(something: string) {
  console.log(something);
  return something;
}
function logSomething2(something: number) {
  console.log(something);
  return something;
}
function logSomething3<T>(something: T): T {
  console.log(something);
  return something;
}
logSomething3<boolean>(true);
logSomething3<string>('abc');
logSomething3<number>(3);

function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
} 

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();


// 제네릭 기본 문법 - 인터페이스
interface Developer3<T> {
  name: string;
  age: T;
}
const tony: Developer3<number> = { name: 'tony', age: 100 };


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown1 {
  value: string;
  selected: boolean;
}
interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
const objGeneric1: Dropdown1 = { value: 10, selected: false }; // X - value가 string이어야 함
const objGeneric2: Dropdown1 = { value: "abc", selected: false }; // O
const objGeneric3: Dropdown2 = { value: "abc", selected: false }; // X - 제네릭 선언해야함
const objGeneric4: Dropdown2<number> = { value: 10, selected: false }; // O
const objGeneric5: Dropdown2<string> = { value: 'abc', selected: false }; // O


// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray1<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray2<T>(value: T[]): T[] {
  value.length; // O - 특정 타입으로 이루어진 "배열" 형태임을 알기 때문에, length 사용 가능
  return value;
}

getNumberAndArray1<string>('a'); // O
getNumberAndArray1<string>(['a', 'b']) // X 
getNumberAndArray2<string>('a'); // X - 배열 형태 아님
getNumberAndArray2<string>(['a', 'b']) // O



// 제네릭 타입 제한 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// <T extends LengthType> : length라는 속성이 제공된다는 것을 표현
function logTextLength<T extends LengthType>(text: T): T {
  text.length; // O
  return text;
}

logTextLength('a'); // O - string에는 .length가 기본으로 제공됨
logTextLength(10); // X - number에는 .length가 제공되지 않음
logTextLength({ length: 10 }); // O - length라는 속성이 들어가기만 하면 받아준다


// 제네릭 타입 제한 - keyof : 
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
// <T extends keyof ShoppingItems> : ShoppingItems에 있는 키들 중에 한가지가 바로 제네릭(타입)이 된다.
// 여기서는 ShoppingItems의 키값인 name, price, address, stock만 제네릭으로 넣을 수 있다 
function getAllowedOptions1<T extends keyof ShoppingItems>(option: T): T {
  return option;
}
getAllowedOptions1('nothing'); // X 
getAllowedOptions1<string>('nothing'); // X
getAllowedOptions1('name');



function getAllowedOptions2<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}

const e = getAllowedOptions('name');
a.toUpperCase(); // Name