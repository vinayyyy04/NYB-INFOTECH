const student6 = {
  name1: "vinay",
  age: 22,
  course: "B.Tech",
  city: "Hyderabad"
};

const { name1, ...remainingDetails } = student;

console.log(name1);
console.log(remainingDetails);