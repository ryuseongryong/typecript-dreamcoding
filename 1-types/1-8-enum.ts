{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);
  // enum의 문제는 enum을 할당한 변수에 다른 어떤 숫자가 할당될 수 있다는 것, 컴파일 에러가 발생하지 않고, 정상적으로 동작함 따라서 잘못된 커뮤니케이션이 발생할 수 있음 = 타입이 정확히 보장되지 않음
  // 상수들을 묶을 수 있는 union type을 사용하는 것이 효과적임

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';

  // enum을 쓸 수 밖에 없는 경우?
  // 다른 모바일 클라이언트(안드로이드, iOS)는 코틀린이나 스위프트 언어를 사용하기 때문에 사용자의 데이터를 JSON으로 묶어서 다시 다른 클라이언트로 보내야 할 때, 모바일 클라이언트에서 사용하는 언어에서는 union type을 표현할 수 없음
  // 따라서 서로 이해할 수 있는 enum type을 사용
  // 하지만 웹 클라이언트에서만 사용하여 다른 모바일 클라이언트와 의사소통이 필요 없다면 enum 대신 type을 이용하는 것이 조금 더 안전함
}
