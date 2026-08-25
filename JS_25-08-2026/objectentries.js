const student3 = {
  name: "rahul",
  age: 22
};

for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}