{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) { }

  // Tuple -> interface, type alias, class로 대체 가능
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;

  // 하지만 현실적으로 Tuple은 사용하는 것이 좋지는 않음
  // 데이터에 접근할 때, 인덱스로만 접근 하는 것은 뭐가 들었는지 확인하기에 불편함
  // 따라서 Tuple 대신에 Object를 사용하면, Key를 불러오면서 어떤 값이 담겨있는 지 확인할 수 있기 때문에 더 유용하게 사용할 수 있음
  // student.name OR student.age

  // Tuple은 F.E.의 
  // const [count, setCount]= useState(0)
  //의 경우에 유용한 쓰임을 보여줌
  // 서로 다른 타입을 동적으로 만들어서 리턴하고 사용하는 사람이 각각의 이름을 정해서 쓸 수 있도록 만든 Tuple을 잘 사용한 예제임.
  // 그러나 interface, type alias, class로 대체 가능한 경우에도 Tuple을 사용하는 것은 좋지 않은 코딩

  // 동적으로 리턴하는데 클래스나 인터페이스로 묶기가 애매하고 동적으로 관련있는 다른 타입의 데이터를 묶어서 사용자가 이름을 정의해서 쓸 경우에는 Tuple이 유용할 수 있음
  // 그 외에는 다른 것들로 대체 가능
}
