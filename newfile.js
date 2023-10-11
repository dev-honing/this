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