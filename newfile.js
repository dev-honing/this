function student(name, number){
  this.name = name;
  this.number = number;
}
let test = new student("변호녕", "0")
console.log(test); // 콘솔에 찍어보기 : 객체가 생성됨!