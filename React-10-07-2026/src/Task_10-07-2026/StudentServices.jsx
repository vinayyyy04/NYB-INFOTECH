import api from "./Axios";

// GET Students
export const getStudents = () => api.get("/");

// POST Student
export const addStudent = (student) =>
  api.post("/", student);

// PUT Student
export const updateStudent = (id, student) =>
  api.put(`/${id}`, student);

// PATCH Student
export const updateStudentName = (id, name) =>
  api.patch(`/${id}`, { name });

// DELETE Student
export const deleteStudent = (id) =>
  api.delete(`/${id}`);