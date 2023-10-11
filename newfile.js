function student(name, number){
  this.name = name;
  this.number = number;
}
let test = new student("변호녕", "0")

// 빈 배열을 변수 선언
let studentArr = [];

// 배열 변수 선언
let list = ["이민구", "윤준현"];

for(let i=0; i < list.length; i++ ){
  studentArr[i] = new student(list[i], i+1);
}
console.log(studentArr); // 콘솔로 찍힌 내용을 확인하기
// [
//   student { name: '이민구', number: 1 },
//   student { name: '윤준현', number: 2 }
// ]

// 거푸집의 원리와 같다 : 틀을 만든 것!