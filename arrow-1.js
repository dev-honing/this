function outerOne(){
  function innerOne(){
    console.log(this);
  }
  innerOne();
}

console.log(outerOne());