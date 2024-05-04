import React, { useEffect } from "react";
import Select from "react-select";
import {
  addWorkMode,
  removeWorkMode,
  clearWorkMode,
} from "../../redux/slices/work-slice";
import { useDispatch, useSelector } from "react-redux";

export default function WorkMode({ customStyles, formatOptionLabel }) {
  const dispatch = useDispatch();
  const selectedWorkMode = useSelector((state) => state.work.selectedWorkMode);

  useEffect(() => console.log(selectedWorkMode));
  const workModeOptions = [
    {
      options: [
        { value: "Remote", label: "Remote" },
        { value: "Hybrid", label: "Hybrid" },
        { value: "In-Office", label: "In-Office" },
      ],
    },
  ];

  const handleWorkModeChange = (selectedOptions) => {
    dispatch(clearWorkMode());
    selectedOptions.forEach((option) => {
      dispatch(addWorkMode(option.value));
    });
  };

  const handleRemoveWorkMode = (removedWork) => {
    dispatch(removeWorkMode(removedWork)); // Remove the selected work
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
        placeholder="Remote"
        options={workModeOptions}
        value={selectedWorkMode.map((work) => ({ value: work, label: work }))}
        onChange={handleWorkModeChange}
        onRemove={handleRemoveWorkMode}
        isMulti
        isSearchable
        isClearable
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
}
