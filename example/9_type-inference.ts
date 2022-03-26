// 타입 추론 기본 1

var a = 'a'; // string으로 추론함 (값이 초기화 될때)

function logA(a = 'a') { // a를 string으로 추론함 , 반환값은 number로 추론함
  var b = 10;
  return b;
}


// 타입 추론 기본 2
interface Dropdown<T> {
  value: T; // T에 따라 바뀜
  title: string; // string으로 고정
}
var items1: Dropdown<number> = {
  value: 10,
  title: 'a'
}
var items2: Dropdown<string> = {
  value: 'abc',
  title: "a",
};


// 타입 추론 기본 3
interface DetailedDropdown<K> extends Dropdown<K> {
  // value, // extends Dropdown
  // title, // extends Dropdown
  description: string;
  tag: K;
}
var detailItems1: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}
var detailItems2: DetailedDropdown<string> = {
  value: "hi",
  title: "a",
  description: "b",
  tag: "c",
};


// Best Common Type : 가장 근접한 타입으로 추론
let arr = [1 ,2, true, true, 'a'];