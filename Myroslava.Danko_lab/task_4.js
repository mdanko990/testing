function find_target(arr, target){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i != j && arr[i] + arr[j] === target){
        count++;
      }
    }
  }
  return count;
}

console.log(find_target([1, 3, 6, 2, 2, 0, 4, 5], 5));
