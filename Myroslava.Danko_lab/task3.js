function findSum(num){
  if(num < 10){
     return num;
  }
  const lastDigit = num % 10;
  const remainingNum = Math.floor(num / 10);
  return findSum(lastDigit + findSum(remainingNum));
}
console.log(findSum(16));
console.log(findSum(942));
console.log(findSum(132189));
console.log(findSum(493193));