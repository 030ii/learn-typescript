interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

interface OptionalProduct { // 옵셔널로 변경
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

type OptionalProductPartial = Partial<Product>; // OptionalProduct과 동일함

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ...
}

// interface productDetail {
//   id: number;
//   name: string;
//   price: number;
// }
type ShoppingItem = Pick<Product, "id" | "name" | "price">; // Pick : Product에서 특정 키만 뽑아(pick) 쓰겠다 

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// function displayProductDetail(shoppingItem: { id: number; name: string; price: number }) { // 원하는 키만 추출된 객체
// function displayProductDetail(shoppingItem: productDetail) { // 원하는 키만 추출된 객체를 인터페이스로 선언 
// function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) { // 원하는 키만 [추출]된 객체를 Pick으로 지정
// function displayProductDetail(shoppingItem: Omit<Product, "stock">) { // 원하는 키만 [제거]된 객체를 Omit으로 지정
  function displayProductDetail(shoppingItem: ShoppingItem) {
  // ...
}


// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// function updateProductItem(productItem: Product) { // 매번 모든 속성을 다 포함해야함
// function updateProductItem(productItem: OptionalProduct) { // 옵셔널로 된 객체
function updateProductItem(productItem: Partial<Product>) { // OptionalProduct과 같은 효과 (Partial)
}


// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// #1 옵셔널 타입으로 
type UserProfileUpdate1 = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};
// #2 위 내용을 축약
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}
// #3 keyof으로 축약
type UserProfileKeys = keyof UserProfile;
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p]
}
// #4 Partial 형태
type Partial2<T> = {
  [p in keyof T]?: T[p]
}


// 자세한 유틸리티는 https://www.typescriptlang.org/docs/handbook/utility-types.html 에서




let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

function displayProduct(productInfo: { id: 1; name: '참치김밥'; price: 3000 }) {
  // ...
}

// #1 - Partial
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
}

const productName: PickFewThings<Product, 'name'> = {}
const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {}