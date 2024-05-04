import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedExperience: [],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state, action) => {
      state.selectedExperience.push(action.payload);
    },

    removeExperience: (state, action) => {
      state.selectedExperience = state.selectedExperience.filter(
        (experienceNumber) => experienceNumber !== action.payload
      );
    },
    clearExperience: (state) => {
      state.selectedExperience = [];
    },
  },
});

export const { addExperience, removeExperience, clearExperience } =
  experienceSlice.actions;
export default experienceSlice.reducer;
