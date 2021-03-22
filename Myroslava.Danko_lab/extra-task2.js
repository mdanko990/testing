function int32ToIp(int32){
  return int32.toString(2)
              .padStart(32, '0')
              .match(/([01]{8})/g)
              .map(x => parseInt(x, 2))
              .join('.');
}

console.log(int32ToIp(2149583361));
console.log(int32ToIp(32));
console.log(int32ToIp(0));