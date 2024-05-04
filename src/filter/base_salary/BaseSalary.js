import React, { useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  addSalary,
  clearSalary,
  removeSalary,
} from "../../redux/slices/salary-slice";

export default function BaseSalary({ customStyles, formatOptionLabel }) {
  const minimumBasePayOptions = [
    {
      options: [
        { value: "5K USD", label: "5K USD" },
        { value: "15K USD", label: "15K USD" },
        { value: "25K USD", label: "25K USD" },
        { value: "35K USD", label: "35K USD" },
        { value: "45K USD", label: "45K USD" },
        { value: "55K USD", label: "55K USD" },
        { value: "65K USD", label: "65K USD" },
        { value: "75K USD", label: "75K USD" },
        { value: "85K + USD", label: "85K + USD" },
      ],
    },
  ];
  const dispatch = useDispatch();

  const selectedSalary = useSelector((state) => state.salary.selectedSalary);

  const handleSalaryChange = (selectedOptions) => {
    dispatch(clearSalary());
    if (selectedOptions !== null) {
      dispatch(addSalary(selectedOptions.value));
    }
  };

  const handleRemoveSalary = (removedSalary) => {
    if (selectedSalary !== null) {
      dispatch(removeSalary(removedSalary));
    }
  };

  useEffect(() => console.log(selectedSalary));

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
        placeholder="Minimum Base Salary"
        options={minimumBasePayOptions}
        value={selectedSalary.map((salary) => ({
          value: salary,
          label: salary,
        }))}
        onChange={handleSalaryChange}
        onRemove={handleRemoveSalary}
        isSearchable
        isClearable
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
}
