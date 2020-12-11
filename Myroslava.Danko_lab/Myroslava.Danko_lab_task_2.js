function first_non_repeating_letter(str) {
  let arr = str.split('');
  let result;
  let count;
 
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) 
    {
      if (arr[i] === arr[j] || arr[i] === arr[j].toLowerCase() || arr[i] === arr[j].toUpperCase()) {
        count+= 1;
      }
    }
 
    if (count < 2) {
      result = arr[i];
      break;
    }
    else{
      result = '';
    }
  }
  return result;
}

console.log(first_non_repeating_letter('sTreSS'));