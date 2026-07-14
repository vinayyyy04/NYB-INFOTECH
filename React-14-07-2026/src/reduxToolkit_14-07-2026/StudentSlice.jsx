import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
  },

  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    removeStudent: (state) => {
      state.students.pop();
    },

    clearStudents: (state) => {
      state.students = [];
    },
  },
});

export const { addStudent, removeStudent, clearStudents } =
StudentSlice.actions;

export default StudentSlice.reducer;