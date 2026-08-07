// Student class
class Student {
  constructor(name, age, course = "JavaScript") {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  display() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Course: ${this.course}`);
  }
}

// Create students
const student1 = new Student("Vinay", 22);
const student2 = new Student("Rahul", 21, "React");

// Array of students
const students = [student1, student2];

// Arrow function
const showStudents = () => {
  students.forEach(student => student.display());
};

showStudents();