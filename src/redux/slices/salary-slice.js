import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSalary: [],
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    addSalary: (state, action) => {
      state.selectedSalary.push(action.payload);
    },

    removeSalary: (state, action) => {
      state.selectedSalary = state.selectedSalary.filter(
        (salary) => salary !== action.payload
      );
    },
    clearSalary: (state) => {
      state.selectedSalary = [];
    },
  },
});

export const { addSalary, removeSalary, clearSalary } = salarySlice.actions;
export default salarySlice.reducer;
