function outerOne(a){
  const innerOne = b => console.log(b);
  innerOne(a);
}