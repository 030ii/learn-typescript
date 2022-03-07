// @ts-check // 타입스크립트를 쓴 것처럼 타입 체크를 해준다!

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum_js(a, b) {
  return a + b;
}

let result_js = sum_js(10, "20"); // 에러 체크
result_js.toString(); // 자동 완성
