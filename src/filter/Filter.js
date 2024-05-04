import * as React from "react";
import "./filter.css";
import Select from "react-select";
import { useState } from "react";
import Roles from "./roles/Roles";
import EmployeeNumber from "./employee/EmployeeNumber";
import Experience from "./experience/Experience";
import WorkMode from "./work/WorkMode";
import BaseSalary from "./base_salary/BaseSalary";
import SearchBar from "./search/SearchBar";

export default function Filter() {
  const [minimumBasePay, setminimumBasePay] = useState(null);

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      textTransform: "capitalize",
      borderRadius: "4px",
      border: `1px solid #ccc`,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      paddingRIght: "14px",
      minWidth: "fit-content",
    }),

    clearIndicator: (styles) => ({
      color: "gray",

      "&:hover": {
        color: "black",
      },
    }),
  };

  const formatOptionLabel = ({ label }) => (
    <div style={{ textTransform: "capitalize" }}>{label}</div>
  );

  return (
    <div>
      <div className="apply-search">
        <span className="apply-span">Applied Jobs</span>
        <span className="search-span">Search Jobs</span>
      </div>
      <div className="header-container">
        <Roles
          customStyles={customStyles}
          formatOptionLabel={formatOptionLabel}
        />

        <EmployeeNumber
          customStyles={customStyles}
          formatOptionLabel={formatOptionLabel}
        />

        <Experience
          customStyles={customStyles}
          formatOptionLabel={formatOptionLabel}
        />

        <WorkMode
          customStyles={customStyles}
          formatOptionLabel={formatOptionLabel}
        />

        <BaseSalary
          customStyles={customStyles}
          formatOptionLabel={formatOptionLabel}
        />

        <SearchBar />
      </div>
    </div>
  );
}
