function Circle(radius) {
  console.log("Circle this:", this); // Circle을 가리킴

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

/**
 * 1. new 키워드
 * - 빈 객체(인스턴스) 생성 후 this에 바인딩 + 인스턴스를 초기화
 */

const circle1 = new Circle(5); // 생성자로 호출 [[Construct]]
const circle2 = Circle(10); // 일반함수로써 호출 [[Call]]
console.log("circle1", circle1);
console.log("circle2", circle2);
console.log(radius, getDiameter());

/**
 * 2. 생성자는 return 문을 반드시 생략해야 한다.
 */
// - object를 반환 할 경우 this 반환이 무시됨
// - primitive 타입을 반환하는 것은 생성자 호출시 this가 반환됨
// function Rectangle(width, height) {
//   console.log(this);

//   this.width = width;
//   this.height = height;

//   this.getArea = function () {
//     return 2 * this.radius;
//   };

//   return {};
// }

// const rect1 = new Rectangle(10, 20);
// console.log(rect1);

/**
 * 3. constructor vs non-constructor
 */
// 일반함수
// function foo() {} // 함수 선언문
// const bar = function () {}; // 함수 표현식
// const baz = {
//   x: function () {}, // 함수 표현식
// };

// const i1 = new foo();
// const i2 = new bar();
// const i3 = new baz.x();

// console.log(i1, i2, i3);

// // 화살표 함수
// const arrow = () => {};
// const i4 = new arrow();

// // 메서드
// const obj = {
//   x() {},
// };
// const i5 = new obj.x();
// console.log(i4, i5);
