function student(name, number){
  this.name = name;
  this.number = number;
}
let test = new student("변호녕", "0")
console.log(test); // 콘솔에 찍어보기 : 객체가 생성됨!
// -> 이 작업은 객체를 뽑아낸 것!

let studentList = {
  name : "hello",
  number : 1,
} // -> 지금까지는 이렇게 객체를 리터럴로 만들어왔다.