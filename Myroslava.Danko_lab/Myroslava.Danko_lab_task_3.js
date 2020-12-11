/*function sum_digits(number){
  if(number < 10 && number > 0){
    return num;
   }
  let lastDigit = number % 10;
  let remainingNum = Math.floor(number / 10);
  return sum_digits(lastDigit + sum_digits(remainingNum));
}

console.log(sum_digits(16));
console.log(sum_digits(942));
console.log(sum_digits(132189));
console.log(sum_digits(493193));*/
const findSum = (num) => {
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