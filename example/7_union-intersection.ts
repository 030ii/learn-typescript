function logMessage1(value: string) {
  console.log(value);
}
logMessage1('hello');
logMessage1(100);

function logMessage2(value: number) {
  console.log(value);
}
function logMessage3(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
// 유니온 타입 - OR 연산자 활용하여, 하나의 타입 이상을 쓸 수 있도록 처리 

// # Intersection 타입 문법
// 인터섹션 타입 - AND 연산자를 활용하여, 여러 타입을 모두 만족하는 타입으로 정의
var chang3: string | number | boolean;
var chang4: string & number & boolean; // 해당 예제는 불가능하므로 never 타입 

function logMessage4(value: string | number) { 
  console.log(value);
}

// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
function logMessage5(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase(); // 여기서 value는 string타입으로 된 value이다 (타입 가드)
  }
  if (typeof value === 'number') {
    value.toLocaleString(); // 여기서 value는 number타입으로 된 value이다 (타입 가드)
  }
  throw new TypeError('value must be string or number')
}

interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

// 유니온 타입으로 구조체를 넣을 경우 - 공통된 속성만 접근 가능 (보장된 속성만 가능)
function askSomeone1(someone: Developer2 | Person2) { 
  someone.name; // O => 공통된 속성만 접근 가능 (보장된 속성만 가능)
  someone.skill; // X => 타입 가드를 이용해서만 속성 접근 가능
  someone.age; // X => 타입 가드를 이용해서만 속성 접근 가능
}

// 인터섹션 타입으로 구조체를 넣을 경우 - 구조체의 모든 속성을 모두 포함한 타입
function askSomeone2(someone: Developer2 & Person2) {
  someone.name; // O 
  someone.skill; // O
  someone.age; // O
}

askSomeone1({ name: '디벨로퍼', skill: '웹 개발'}); // O - Developer2 타입
askSomeone1({ name: '사람', age: 100}); // O - Person2 타입

askSomeone2({ name: '디벨로퍼이자 사람', skill: '프로그래밍', age: 100}); // O - 모든 속성을 다 갖고 있어야 함
askSomeone2({ name: '디벨로퍼이자 사람', skill: '프로그래밍'}); // X
askSomeone2({ name: "디벨로퍼이자 사람", age: 100 }); // X