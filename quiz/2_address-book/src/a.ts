// function fetchItems1() {
function fetchItems1(): string[] {
  let items = ["a", "b", "c"];
  return items;
}

let result1 = fetchItems1();
console.log(result1); // string[]으로 추론됨

// function fetchItems2() {
function fetchItems2(): Promise<string[]> {
  let items = ["a", "b", "c"];
  return new Promise(function (resolve) {
      resolve(items);
  });
}

let result2 = fetchItems2();
console.log(result2); // Promise<unknown>으로 추론됨 => Promise<T> => 제네릭 받게끔 내부적으로 되어있음