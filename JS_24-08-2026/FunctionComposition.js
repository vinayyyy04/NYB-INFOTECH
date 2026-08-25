function addTwo(number) {
  return number + 2;
}

function multiplyByThree(number) {
  return number * 3;
}

const result = multiplyByThree(addTwo(5));

console.log(result);