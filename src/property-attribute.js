/**
 * Object.defineProperty에서 옵션 생략시 기본값
 * - value = undefined
 * - get = undefined
 * - set  = undefined
 * - writable = false
 * - enumerable = false
 * - configurable = false
 */

// const person = {};

// Object.defineProperty(person, "firstName", {
//   value: "Soobin",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// Object.defineProperties(person, {
//   lastName: {
//     value: "Bak",
//   },
//   fullName: {
//     get() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set(name) {
//       [this.firstName, this.lastName] = name.split(" ");
//     },
//     enumerable: true,
//     configurable: false,
//   },
// });

// 1. property attribute가 어떻게 구성되었는지 확인

// * 자바스크립트 엔진이 프로퍼티 생성시 기본값으로 자동 정의함.
// - writable, enumerable, configurable 모두 true가 기본값.
// const student = {
//   name: 'soobin'
// }
// console.log("student descriptors", Object.getOwnPropertyDescriptors(student));

// * 프로퍼티 어트리뷰트를 직접 구성한 경우
// console.log(
//   "firstName descriptor",
//   Object.getOwnPropertyDescriptor(person, "firstName")
// );
// console.log("person descriptors", Object.getOwnPropertyDescriptors(person));

// 2. [[Writable]] = false 일 경우, readonly 처럼 동작
// person.lastName = "Kim";
// delete person.lastName;
// console.log(person);

// 3. [[Configurable]] = false 일 경우, 삭제 불가 & "재구성" 불가(단, writable true -> false 변경은 가능)
// 즉, 기존에 있는 프로퍼티의 변경을 방지. 확장하는것은 가능

// delete person.lastName;
// Object.defineProperty(person, "lastName", { writable: true });
// Object.defineProperty(person, "lastName", { enumerable: true });
// Object.defineProperty(person, "lastName", { configurable: true });

// * 단, writable true -> false 변경은 가능
// Object.defineProperty(person, "age", {
//   value: 20,
//   writable: true
// });

// person.age = 30;
// delete person.age;
// Object.defineProperty(person, "age", { enumerable: true });
// Object.defineProperty(person, "age", { configurable: true });
// Object.defineProperty(person, "age", { writable: true });
// Object.defineProperty(person, "age", { writable: false });
// Object.defineProperty(person, "age", { writable: true });

// * get, set도 재정의는 불가, 단 새로운 정의는 가능
// Object.defineProperty(person, "fullName", {
//   get() {
//     return `${this.firstName}-${this.lastName}`;
//   },
//   set(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   }
// });
// * 새로운 정의 (당연히 가능하지 !)
// Object.defineProperty(person, "gender", {
//   get() {
//     return this.gender;
//   },
//   set(text) {
//     if (text === "FEMALE" || text === "MALE") {
//       this.gender = text;
//     } else {
//       this.gender = "ETC";
//     }
//   }
// });
// console.log("person descriptors", Object.getOwnPropertyDescriptors(person));

// 4. [[Enumerable]] = false 일 경우, for...in, Object.keys 메서드 등으로 열거 불가
// - 열거 가능한 항목만 사용됨
// console.log(Object.keys(person)); // ["firstName", "fullName"]

// 5. [[Get]], [[Set]]은 접근자 프로퍼티의 어트리뷰트
// console.log(
//   "firstName descriptor",
//   Object.getOwnPropertyDescriptor(person, "fullName")
// );

// 6. 객체 변경 방지
// const fruit = {
//   apple: 1,
// };
// * 확장: Object.preventExtensions (Object.isExtensible)
// console.log(Object.isExtensible(fruit));
// console.log(Object.getOwnPropertyDescriptors(fruit));
// Object.preventExtensions(fruit);
// fruit.apple = 10;
// fruit.banana = 2;
// console.log(Object.getOwnPropertyDescriptors(fruit));
// console.log(Object.isExtensible(fruit));
// Object.defineProperty(fruit, "orange", { value: 3 });
// delete fruit.apple;

// * 밀봉: Object.seal (Object.isSealed)
// console.log(Object.isSealed(fruit));
// console.log(Object.getOwnPropertyDescriptors(fruit));
// Object.seal(fruit);
// console.log(Object.isSealed(fruit));
// fruit.apple = 10;
// fruit.banana = 2;
// Object.defineProperty(fruit, "orange", { value: 3 });
// console.log(Object.getOwnPropertyDescriptors(fruit));
// delete fruit.apple;

// * 동결: Object.freeze (Object.isFrozen)
// console.log(Object.isFrozen(fruit));
// console.log(Object.getOwnPropertyDescriptors(fruit));
// Object.freeze(fruit);
// console.log(Object.isFrozen(fruit));
// fruit.apple = 10;
// fruit.banana = 2;
// Object.defineProperty(fruit, "orange", { value: 3 });
// console.log(Object.getOwnPropertyDescriptors(fruit));
// delete fruit.apple;
