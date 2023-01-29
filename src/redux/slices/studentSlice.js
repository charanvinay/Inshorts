import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "students",
  data: [
    {
      id: 1,
      name: "charan",
      roll_no: 123,
      phn_no: 3234343,
      gender: "male",
      address: "sdfsdfsdf",
    },
    {
      id: 2,
      name: "vinay",
      roll_no: 12323423,
      phn_no: 5464534343,
      gender: "female",
      address: "sdfs sdfs df sdf sdf dfsdf",
    },
    {
      id: 3,
      name: "chanay",
      roll_no: 44345123,
      phn_no: 5565563234343,
      gender: "male",
      address: "asdfa s df asdfsdfsdfsdf",
    },
  ],
  total_count: 3,
};

export const studentSlice = createSlice({
  name: "students_slice",
  initialState: initialState,
  reducers: {
    addStudent: (state, action) => {
      state.data.push(action.payload);
      state.total_count++;
    },
    editStudent: (state, action) => {
      state.data.map((std, ind) => {
        if (std.id === action.payload.id) {
          state.data[ind] = action.payload;
        }
      });
    },
    deleteStudent: (state, action) => {
      let { id } = action.payload;
      const existingStudent = state.data.find((s) => s.id === id);
      if (existingStudent) {
        state.total_count--;
        state.data = state.data.filter((student) => student.id != id);
      }
    },
  },
});
export const getStudents = (state) => state.studentReducer;
export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
