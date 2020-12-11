function filter_list(list){
  let newList = [];

  for( let i = 0; i < list.length; i++){
    if(typeof list[i] == 'number'){
      newList.push(list[i]);
    }
  }
  return newList;
}

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'assf', '1', '123', 123]));
