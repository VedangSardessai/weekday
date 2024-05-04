import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNumberOfEmployees: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployeeNumbers: (state, action) => {
      state.selectedNumberOfEmployees.push(action.payload);
    },

    removeEmployeeNumbers: (state, action) => {
      state.selectedNumberOfEmployees = state.selectedNumberOfEmployees.filter(
        (employeeNumber) => employeeNumber !== action.payload
      );
    },
    clearEmployeeNumbers: (state) => {
      state.selectedNumberOfEmployees = [];
    },
  },
});

export const {
  addEmployeeNumbers,
  removeEmployeeNumbers,
  clearEmployeeNumbers,
} = employeeSlice.actions;
export default employeeSlice.reducer;
