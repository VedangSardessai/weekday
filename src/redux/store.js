import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./slices/role-slice";
import employeeReducer from "./slices/employee-slice";
import experienceReducer from "./slices/experience-slice";
import workReducer from "./slices/work-slice";
import salaryReducer from "./slices/salary-slice";
import searchReducer from "./slices/search-slice";
import techReducer from "./slices/tech-slice";

export const store = configureStore({
  reducer: {
    role: roleReducer,
    employee: employeeReducer,
    experience: experienceReducer,
    work: workReducer,
    salary: salaryReducer,
    search: searchReducer,
    tech: techReducer,
  },
});
