// 변수명:타입 = 값

// TS 문자열
const str: string = "hello";

// TS 숫자
const num: number = 10;

// TS 진위값
let isLogin: boolean = false; // 불린

// TS 배열
const arrNumber: Array<number> = [1, 2, 3]; // 배열 (숫자 형태)
const arrString: Array<string> = ["a", "b", "c"]; // 배열 (문자열 형태)
const arrLiteral: number[] = [1, 2, 3]; // 리터럴 배열 (숫자 형태)

// TS 튜플
const subject: [string, number] = ["컴퓨터공학과", 1]; // 튜플 - 모든 인덱스에 타입이 정의된 배열

// TS 객체
const obj: object = {}; // 객체 - 내부 상관 없음
// 객체 - 내부 타입 지정
const person: { age: number; name: string } = {
  age: 100,
  name: "Capt",
};
