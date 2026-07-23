function LargestNumber(arr) {

  if (arr.length === 0);

let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
  }
}
  return largest;
}

let numbers = [10,45,2,78,15];
console.log("The largest number in the array is " +  LargestNumber(numbers));