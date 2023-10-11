function outerOne(a){
  const innerOne = b => console.log(b);
  innerOne(a);
}
// 오늘 핵심 정리
// 화살표 함수를 보면 겁먹지 말고 계속 사용해보며 연습하기
// this 키워드는 일단 사용하지 않기
