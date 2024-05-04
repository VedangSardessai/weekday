import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRoles: [],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state.selectedRoles.push(action.payload);
    },

    removeRole: (state, action) => {
      state.selectedRoles = state.selectedRoles.filter(
        (role) => role !== action.payload
      );
    },
    
    clearRoles: (state) => {
      state.selectedRoles = [];
    },
  },
});

export const { addRole, removeRole, clearRoles } = roleSlice.actions;
export default roleSlice.reducer;
