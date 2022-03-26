// 타입 가드

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Chang', age: 10, skill: 'Dev' }
}

let chang = introduce();
console.log(chang.skill); // skill을 명시적으로 포함시켜 return했더라도 보장되어있지 않음 => 명시적으로 보장해야 함

if ((chang as Developer).skill) { // 명시적으로 skill이 있음을 보장함 
    let skill = (chang as Developer).skill;
    console.log(skill);
} else if ((chang as Person).age) {
    let age = (chang as Person).age;
    console.log(age);
}

// 위 방식은 가독성이 안좋으므로, 타입 가드를 사용

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer { // is : target이 Developer 인지 아닌지 구분하는 키워드
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(chang)) {
  chang.skill; // skill에 접근 가능 (Developer)
} else {
  chang.age; // age에 접근 가능 (Person)
}