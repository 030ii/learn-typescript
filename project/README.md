## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기
0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성
   - NPM 초기화
     - npm init -y
   - 타입스크립트 라이브러리 설치
     - npm i typescript --save-dev (npm i typescript -D)
   - 타입스크립트 설정 팡일 생성 및 기본 값 추가
     - tsconfig.json 파일 생성
   - 자바스크립트 파일을 타입스크립트 파일로 변환하기
     - app.js => app.ts
   - `tsc` 명령어로 타입스크립트 컴파일 하기
     - package.json에 "build": "tsc" 추가 
     - npm run build
2. 명시적인 `any` 선언하기
   - `tsconfig.json`에 "noImplicitAny": true 추가
   - 가능한한 구체적인 타입으로 타입 정의
3. 프로젝트 환경 구성
   - https://github.com/030ii/learn-typescript/tree/master/setup
   - babel, eslint, prettier 등의 환경 설정
4. 외부 라이브러리 모듈화
5. `strict` 옵션 추가 후 타입 정의

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman Covid 19 API](https://covid-19-apis.postman.com/)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#00030720-fae3-4c72-8aea-ad01ba17adf8)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
- [타입스크립트 딥다이브](https://basarat.gitbook.io/typescript)