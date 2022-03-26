// mapped types
type Heroes = 'Hulk' | 'Thor' | 'Capt';
type HeroAges = { [K in Heroes]: number }; // Heroes(유니온 타입)들을 키로 갖도록 정의
const ages: HeroAges = {
  Hulk : 33,
  Thor : 100,
  Capt : 1000,
};

// for in 
// var arr = ['a','b','c'];
// for (var key in arr) {
//   console.log(arr[key]);
// }