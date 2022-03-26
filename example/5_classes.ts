// ES5에서 생성자 함수 선언
function Person1(name, age) {
  this.name = name;
  this.age = age;
}
const hulk = new Person1('Banner', 33);

// 크롬 개발자 도구 상에서 __proto__ 체인 확인
// Built-in Javascript API 또는 Javascript Native API
// var user = {name:'chang', age:100};
// var admin = {};
// admin.__proto__ = user; // user의 속성 상속
// admin.name // chang
// admin.age // 100 



// ES6 + 타입스크립트
class Person3 {
  // TS에서는 최상단에 멤버변수들 정의해야 함
  name: string; // 기본적으로는 public
  age: number; // 기본적으로는 public
  private address: string; // 멤버변수의 유효범위 지정 가능 (private, public, protected)
  readonly log: string; // 접근만 할 수 있고 변경 불가 (읽기만 가능)

  constructor(name: string, age: number) {
    // TS에서는 생성자함수의 파라미터에도 타입을 직접 지정해야 함
    this.name = name;
    this.age = age;
  }
}
const chang5 = new Person3('Chang', 100);

// NOTE: 위 코드의 컴파일 결과 확인
// https://www.typescriptlang.org/play/index.html?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6aYAtvAFzQQAuiAlmgOYDcu+Y9ZBArkQEZLMs8wdFUSdglFIgAUhEuVF16AGmhsOabn0QBKLIPx5KACxoQAdHPjQAvAWLxmhwybPn1tteyf4AvtgMAExROHhB4AEF2aT0cZ3xXCw87RPd2aAAqaAAmHzx-XyA


// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
  return <div>Hello World</div>;
}

// Vue
new Vue({
  el: '',
  setup(){

  }
})
