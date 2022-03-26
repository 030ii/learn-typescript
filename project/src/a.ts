interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };
// const capt2: Hero = {};
const capt3 = {} as Hero; // 타입 단언 주의사항 : 필수 속성값을 안넣어도 에러X
// capt3.name = 'capt';
// capt3.skill = 'shield';

// const a: string | null;
// if (a) {
//   a; // string으로 추론됨
// }
// a!; // non-null assertion 주의사항 : 무조건 null이 아니라고 타입 단언

// 결론 : null이 아니라는 확신이 있을때는 활용해도 좋으나, 특징을 알고 사용하자!
