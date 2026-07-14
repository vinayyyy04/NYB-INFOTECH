import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  removeStudent,
  clearStudents,
} from "./StudentSlice";
function Student() {
  const dispatch = useDispatch();

  const students = useSelector((state) => state.Student.students);

  return (
    <div>
      <h2>Student Attendance</h2>

      <button onClick={() => dispatch(addStudent("Vinay"))}>
        Add Vinay
      </button>

      <button onClick={() => dispatch(addStudent("Yashwanth"))}>
        Add Yashwanth
      </button>

      <button onClick={() => dispatch(removeStudent())}>
        Remove Last Student
      </button>

      <button onClick={() => dispatch(clearStudents())}>
        Clear Attendance
      </button>

      <h3>Present Students</h3>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
}

export default Student;