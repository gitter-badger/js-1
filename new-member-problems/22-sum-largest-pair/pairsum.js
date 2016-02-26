function pairsum(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[arr.length - 1] + arr[arr.length - 2];
}

console.log(pairsum([10,14,2,23,19]));
