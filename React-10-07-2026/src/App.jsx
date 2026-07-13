// // import Delete from "./Api.jsx/Delete";
// import Get from "./Api.jsx/Get";
// // import Patch from "./Api.jsx/Patch";
// import Post from "./Api.jsx/Post";
// // import Put from "./Api.jsx/Put";

// function App(){
//   return(
//     <div>
//     <Get/>
//     <Post/>
//     {/* <Put/>
//     <Patch/>
//     <Delete/> */}
//     </div>
//   )
// }

// export default App;

import {
  getPosts,
  addPost,
  updatePost,
  patchPost,
  deletePost,
} from "./Axios_10-07-2026/Api";

function App() {
  const handleGet = async () => {
    const res = await getPosts();
    console.log(res.data);
  };

  const handlePost = async () => {
    const res = await addPost({
      title: "New Post",
      body: "Hello",
      userId: 1,
    });
    console.log(res.data);
  };

  const handlePut = async () => {
    const res = await updatePost(1, {
      title: "Updated",
      body: "Updated Body",
      userId: 1,
    });
    console.log(res.data);
  };

  const handlePatch = async () => {
    const res = await patchPost(1, {
      title: "Partially updated",
    });
    console.log(res.data);
  };

  const handleDelete = async () => {
    await deletePost(1);
    console.log("Deleted");
  };

  return (
    <div>
      <h2>Axios CRUD Example</h2>

      <button onClick={handleGet}>GET</button>
      <button onClick={handlePost}>POST</button>
      <button onClick={handlePut}>PUT</button>
      <button onClick={handlePatch}>PATCH</button>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import {
//   getStudents,
//   addStudent,
//   updateStudent,
//   updateStudentName,
//   deleteStudent,
// } from "./Task_10-07-2026/StudentServices";

// function App() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // GET
//   const loadStudents = async () => {
//     try {
//       setLoading(true);
//       const res = await getStudents();
//       setStudents(res.data);
//     } catch (err) {
//       setError("Failed to load students");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // POST
//   const createStudent = async () => {
//     const res = await addStudent({
//       name: "Rahul",
//       email: "rahul@gmail.com",
//     });

//     console.log("Added:", res.data);
//   };

//   // PUT
//   const editStudent = async () => {
//     const res = await updateStudent(1, {
//       name: "Rahul Kumar",
//       email: "rahul123@gmail.com",
//     });

//     console.log("Updated:", res.data);
//   };

//   // PATCH
//   const changeName = async () => {
//     const res = await updateStudentName(1, "Rahul R");

//     console.log("Patched:", res.data);
//   };

//   // DELETE
//   const removeStudent = async () => {
//     await deleteStudent(1);
//     alert("Student Deleted");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Student Management System</h2>

//       <button onClick={loadStudents}>View Students</button>
//       <button onClick={createStudent}>Add Student</button>
//       <button onClick={editStudent}>Update Student</button>
//       <button onClick={changeName}>Change Name</button>
//       <button onClick={removeStudent}>Delete Student</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <ul>
//         {students.slice(0, 5).map((student) => (
//           <li key={student.id}>
//             {student.name} - {student.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;