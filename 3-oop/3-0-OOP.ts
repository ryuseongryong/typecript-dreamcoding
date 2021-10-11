/** OOP란 무엇인가?
 * 객체지향 프로그램, Object Oriented Programming
 * 프로그래밍의 패러다임이다.
 * 패러다임이란 프로그램을 하는 여러가지 스타일, 방식 중에 한 가지이다. 그 중 OOP는 객체들을 컨셉으로해서 프로그래밍을 하는 것을 말한다.
 * Object는 관련된 데이터나 코드들을 함께 묶을 수 있는 것을 말한다. 다양한 프로그래밍 언어로 객체를 지향하는 프로그래밍 스타일을 구현할 수 있다.
 * 언어마다 어떤 방식으로 어떤 문법을 통해서 객체 지향을 구현할 수 있는지 조금씩 다르지만, 전반적인 개념과 사용방법, 코딩 방식은 큰 차이가 없기 때문에 한 언어로 객체지향을 충분히 마스터한다면 다른 프로그래밍 언어를 공부하는데 도움이 된다.
 * 개발자, 프로그래머라면 객체 지향은 기본적으로 이해하고 쓸 수 있어야 한다.

 * 이번 챕터에서는 객체지향에 대한 정확한 개념과 객체지향을 위해서 따라야 하는 좋은 관례, 관습에 대해서 알아보고, 직접 익혀보는 방향으로 진행하여 객체지향을 체득하는 것을 목표로 하자!
*/

/** 객체 지향과 반대되는 명령어, 절차적 프로그래밍
 * 하나의 어플리케이션을 만들 때, 어플리케이션을 동작시키는 데이터와 함수를 위주로 구성하는 것을 말한다. main함수에서 각종 함수를 호출하고, 그 함수들 각가에서 여러가지 함수들을 호출한다. 
 * 함수 내부에서는 전역적으로 설정된 변수 데이터에 접근할 수 있다. 이렇게 정의된 순서대로, 절차적으로 함수가 하나씩 호출되는 것을 절차지향 프로그래밍이라고 한다.
 * 절차 지향 프로그래밍의 단점
 * 1. 내가 프로젝트에 신규 투입되었을 때, 함수가 얽혀있고, 데이터가 다른 곳에서 업데이트 될 수 있기 때문에 하나를 수정하기 위해서 전체 어플리케이션에 미치는 영향을 이해해야한다. 물론 수정했을 때 다른 부작용이 발생할 확률도 높다.
 * 2. 한 눈에 어플리케이션을 파악하기가 힘들다. = 유지보수, 확장에 힘들다.
 */

/** 객체지향 프로그래밍
 * 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인하고 코딩하는 것을 말한다. 서로 관련있는 데이터와 함수를 여러가지 Object로 정의해서 프로그래밍하는 것을 말한다. 이처럼 객체 지향은 세상을 살면서 흔하게 볼 수 있는 물건들(Object, 객체)을 이야기하는 것이다. 그래서 사람과 가까운 생각을 하면서 Object를 구성할 수 있다.
 * 객체 지향은 Object 단위로 만들어 나가기 때문에 한 곳에서 문제가 생긴다면 관련있는 Object만 수정하여 문제를 해결할 수 있고, 여러번 반복되는 것이 있다면 관련된 Object를 재사용 할 수도 있다. 
 * 새로운 기능이 필요하다면 새로운 Object를 만들면 되기 때문에 확장성도 높다.
 * 이처럼 잘 정의되고 설계된 객체지향 프로그래밍은 생산성, 고품질, 향상된 속도로 프로그래밍이 가능하게 해주고, 더 빠르게 구현하고 새로운 기능을 추가, 문제를 해결, 유지보수를 더 쉽게 할 수 있게 해준다. 
 */

/**
 * Class : template, declare once, no data in
 * Object : instance of a class, created many times, data in
 */

/** 객체지향의 조건
 * 1. Encapsulation 캡슐화
 * 2. Abstraction 추상성
 * 3. Inheritance 상속(을 통한 코드의 재사용성 향상)
 * 4. 위 모든 것들로 Polymorphism 다형성을 구성하여 객체지향적인 프로그래밍 가능
 */

/** 
 * 1. Encapsulation 캡슐화
 * 절차지향 프로그래밍 언어에서는 데이터와 함수가 섞여있는데, 흩어져 있는 것들을 관련있는 요소들로 모아서 캡슐화하는 것
 * 
 * 2. Abstraction 추상화
 * 내부의 복잡한 기능을 다 이해하지 않더라도 외부에서 간단한 interface를 통해서 사용할 수 있는 것
 * 
 * 3. Inheritance 상속
 * 잘 만들어진 parent Class를 바탕으로 child class를 상속시켜 만들 수 있음
 * 
 * 4. Polymorphism 다형성
 * 상속을 통해서 만들어진 것들에 대해 그 종류를 상관하지 않고 공통된 함수로 접근할 수 있음
 */