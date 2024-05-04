import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  removeExperience,
  clearExperience,
} from "../../redux/slices/experience-slice";
import Select from "react-select";

export default function Experience({ customStyles, formatOptionLabel }) {
  const dispatch = useDispatch();

  const experienceOptions = [
    {
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
      ],
    },
  ];

  useEffect(() => console.log(selectedExperience));

  const selectedExperience = useSelector(
    (state) => state.experience.selectedExperience
  );

  const handleExperienceChange = (selectedOptions) => {
    dispatch(clearExperience());
    if (selectedOptions !== null) {
      dispatch(addExperience(selectedOptions.value));
    }
  };
  
  const handleRemoveExperience = (removedExperience) => {
    dispatch(removeExperience(removedExperience));
  };

  return (
    <div
      style={{
        width: "fit-content",
        margin: 5,
        // marginRight: "25px",
      }}
      className="input-container"
    >
      <Select
        className="select-input"
        placeholder="Experience"
        options={experienceOptions}
        value={selectedExperience.map((experience) => ({
          value: experience,
          label: experience,
        }))}
        onChange={handleExperienceChange}
        onRemove={handleRemoveExperience}
        isSearchable
        isClearable
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
}
