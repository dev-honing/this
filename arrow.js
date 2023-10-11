// 이름이 있는 함수(기명함수)
function outer(){
  return "hello";
}

// 이름이 없는 함수(익명함수, 함수 리터럴)
const outerTwo = function(){
  return "bye";
}

// 화살표 함수 배워보기
const outerThree = () => "wow";
console.log(outerThree()); // 콘솔에 찍히는 내용 확인 : wow