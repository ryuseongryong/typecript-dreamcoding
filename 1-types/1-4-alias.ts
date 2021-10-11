{
  /**
   * Type Aliases 
   * -> 복잡하고 재밌는 타입들을 정의할 수 있음
   * -> 새로운 타입을 정의할 수 있다는 뜻
   * Object 형식의 타입도 정의 가능
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   * -> 타입을 문자열로 지정가능
   * -> 문자열 그 자체가 곧 타입
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
