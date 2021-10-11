/**
 * Type Inference
 * 타입 추론
 * 타입을 명확하게 명시해야하는 경우보다, 알아서 자동으로 타입이 결정되는 경우
 * 뻔한 타입은 생략해도 괜춘
 */
let text = 'hello';
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

// 타입 추론은 좋은 것은 아니라고 생각함.
// 타입 스크립트가 알아서 정해주는 것이 거대한 프로젝트에서 복잡한 함수의 경우에 예측하기 힘들 수 있음