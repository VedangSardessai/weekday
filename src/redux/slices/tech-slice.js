import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTechStack: [],
};

const techSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    addTechStack: (state, action) => {
      state.selectedTechStack.push(action.payload);
    },

    removeTechStack: (state, action) => {
      state.selectedTechStack = state.selectedTechStack.filter(
        (TechStack) => TechStack !== action.payload
      );
    },
    clearTechStack: (state) => {
      state.selectedTechStack = [];
    },
  },
});

export const { addTechStack, removeTechStack, clearTechStack } =
  techSlice.actions;
export default techSlice.reducer;
