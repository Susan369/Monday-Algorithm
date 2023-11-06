//largest number in array
//Return an array
function largestOfFour(arr) {
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    var max = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result.push(max);
  }
  
  return result;
}

var largestNumbers = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestNumbers); // Returns [5, 27, 39, 1001]