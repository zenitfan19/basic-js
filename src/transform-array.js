module.exports = function transform(arr) {
  let resultArr = [];
  let missingNext = false;
  if(!Array.isArray(arr)) {
    throw 'Not array';
  } else {
    arr.forEach(function(item, i) {
      switch(item) {
        case '--discard-next':          
          missingNext = true;
          break;
        case '--discard-prev':          
          resultArr.pop();
          break;
        case '--double-next':          
          if(arr[i+1] !== undefined) {
            resultArr.push(arr[i+1]);
          }          
          break;
        case '--double-prev':          
          if(arr[i-1] !== undefined) {
            resultArr.push(arr[i-1]);
          }          
          break;
        default:
          if(missingNext) {
            missingNext = false;
          } else {
            resultArr.push(arr[i]);
          }          
      }
    });
  }
  return resultArr;
};
