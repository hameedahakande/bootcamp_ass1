function findMinMax(arr) {
  var largest = arr[0]
  var smallest = arr[0]
  for (i in arr){
    if (arr[i] > largest) {
      largest = arr[i]
    }
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
 if (smallest === largest) {
 	return [smallest]
 }
 return [smallest, largest]
}

module.exports = findMinMax