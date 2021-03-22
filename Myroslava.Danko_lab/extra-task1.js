function nextBigger(num){
  if(num < 10){
    console.log(-1);
  }else{
    let newNum = parseInt(num.toString()
    .split('')
    .sort()
    .reverse().
    join(''));
    if(newNum===num){
      console.log(-1);
    }else{
      console.log(newNum);
    }
  }
}
const arr=[12,513,2071, 9, 111, 531];
for(let i of arr){
  nextBigger(i);
}