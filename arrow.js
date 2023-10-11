// 이름이 있는 함수(기명함수)
function outerOne(){
  return "hello";
}

// 이름이 없는 함수(익명함수, 함수 리터럴)
const outerTwo = function(){
  return "bye";
}

// 화살표 함수 배워보기
const outerThree = () => "wow";

// 매개변수가 하나인 화살표 함수
const outerFour = a => a;

// 코드의 수가 줄어들어 압축해서 작성할 수 있는 매력적인 기능
// 형태가 너무 함수같지 않아서 익숙지 않음
// 함수의 선언 방식 4가지를 기억해두기!!!