// 1) 일반함수
function foo() {
  console.log(this);
}
foo();
console.log(this);
// 2) 메서드
const obj = { foo };
obj.foo();

// 생성자
const instance = new foo();
