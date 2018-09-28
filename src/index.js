module.exports = function getZerosCount(number) {
  // your implementation
  let zeros=0;
  while(number>0){
    number=Math.floor(number/5);
    zeros+=number;
  }
  return zeros;
}
