import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWorkMode: [],
};

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    addWorkMode: (state, action) => {
      state.selectedWorkMode.push(action.payload);
    },

    removeWorkMode: (state, action) => {
      state.selectedWorkMode = state.selectedWorkMode.filter(
        (workMode) => workMode !== action.payload
      );
    },
    clearWorkMode: (state) => {
      state.selectedWorkMode = [];
    },
  },
});

export const {
  addWorkMode,
  removeWorkMode,
  clearWorkMode,
} = workSlice.actions;
export default workSlice.reducer;
