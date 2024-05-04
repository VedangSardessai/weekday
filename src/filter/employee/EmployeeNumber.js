import React, { useEffect } from "react";
import Select from "react-select";
import {
  addEmployeeNumbers,
  removeEmployeeNumbers,
  clearEmployeeNumbers,
} from "../../redux/slices/employee-slice";
import { useDispatch, useSelector } from "react-redux";

export default function EmployeeNumber({ customStyles, formatOptionLabel }) {
  const dispatch = useDispatch();

  const selectedNumberOfEmployees = useSelector(
    (state) => state.employee.selectedNumberOfEmployees
  );

  useEffect(() => console.log(selectedNumberOfEmployees));

  const numberOfEmplyeesOptions = [
    {
      options: [
        { value: "1-10", label: "1-10" },
        { value: "11-20", label: "11-20" },
        { value: "21-50", label: "21-50" },
        { value: "51-100", label: "51-100" },
        { value: "101-200", label: "101-200" },
        { value: "201-500", label: "201-500" },
        { value: "500+", label: "500+" },
      ],
    },
  ];

  const handleEmployeeNumberChange = (selectedOptions) => {
    dispatch(clearEmployeeNumbers());
    selectedOptions.forEach((option) => {
      dispatch(addEmployeeNumbers(option.value));
    });
  };

  const handleRemoveEmployeeNumber = (removedEmployeeNumber) => {
    dispatch(removeEmployeeNumbers(removedEmployeeNumber)); // Remove the selected role
  };
  return (
    <div
      style={{
        width: "fit-content",
        margin: 5,
      }}
      className="input-container"
    >
      <Select
        className="select-input"
        placeholder="Number of Employees"
        options={numberOfEmplyeesOptions}
        value={selectedNumberOfEmployees.map((employeeNumber) => ({
          value: employeeNumber,
          label: employeeNumber,
        }))}
        onChange={handleEmployeeNumberChange}
        onRemove={handleRemoveEmployeeNumber}
        isMulti
        isSearchable
        isClearable
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
}
