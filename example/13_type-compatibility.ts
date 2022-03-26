// 타입 호환

// 인터페이스
interface Comp_Developer {
  name: string;
  skill: string;
}

// 클래스
class Comp_Person {
  name: string;
}

// 타입 호환
// 인터페이스든 클래스든 종류에는 상관없이, 내부에 있는 구조적인 타입들을 확인하여 호환
var comp_developer: Comp_Developer;
var comp_person: Comp_Person;
comp_developer = comp_person; // X - 더 작은 구조로는 할당 X
comp_person = comp_developer; // O - 더 큰 구조로는 할당 O
// => 작은 구조를 큰 구조에 할당 불가
// => 큰 구조를 작은 구조에 할당 가능


// 유니온 타입
var c: Comp_Developer | Comp_Person;
var d: Comp_Person | string;
c = d;
d = c;


// 함수에서의 타입 호환
var add = function(a: number) {
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}
// => 구조적으로 봤을 때, sum이 구조적으로 더 많음 
sum = add; // O - 호환 가능
add = sum; // X - add는 2개의 인자를 받을 수 없기 때문에 호환 X
// => 함수호환에서는 작은 구조에 큰 구조를 할당 불가
// => 함수호환에서는 큰 구조를 작은 구조에 할당 가능


// 제네릭에서의 타입 호환
interface Empty<T> {
  // ... // 구조적으로 제네릭에 의해 바뀌는 게 없을 때
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2; // O 호환가능 (서로 같은 구조로 봄)
empty2 = empty1; // O 호환가능 (서로 같은 구조로 봄)

interface NotEmpty<T> {
  data: T; // 구조적으로 제네릭에 의해 무언가 바뀌는 게 있을때
}
let notempty3: NotEmpty<string>;
let notempty4: NotEmpty<number>;
notempty3 = notempty4; // X 호환불가 (서로 다른 구조로 봄)
notempty4 = notempty3; // X 호환불가 (서로 다른 구조로 봄)


