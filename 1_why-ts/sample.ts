function sum_ts(a: number, b: number): number {
  return a + b;
}

let result_ts = sum_ts(10, "20"); // 에러 체크
result_ts.toString(); // 자동 완성
