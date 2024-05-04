import React, { useEffect } from "react";
import Select from "react-select";

import {
  addTechStack,
  removeTechStack,
  clearTechStack,
} from "../../redux/slices/tech-slice";
import { useDispatch, useSelector } from "react-redux";

export default function TechStack({ customStyles, formatOptionLabel }) {
  const dispatch = useDispatch();
  const selectedTechStack = useSelector(
    (state) => state.tech.selectedTechStack
  );

  useEffect(() => console.log(selectedTechStack));
  const TechStackOptions = [
    {
      options: [
        { value: "Python", label: "Python" },
        { value: "Java", label: "Java" },
        { value: "GoLang", label: "GoLang" },
        { value: "Ruby/Rails", label: "Ruby/Rails" },
        { value: "C++", label: "C++" },
        { value: "Kotlin", label: "Kotlin" },
        { value: "Django", label: "Django" },
        { value: "C#", label: "C#" },
        { value: "GraphQL", label: "GraphQL" },
        { value: "Flask", label: "Flask" },
        { value: "Typescript", label: "Typescript" },
        { value: "AWS", label: "AWS" },
        { value: "Javascript", label: "Javascript" },
        { value: "Rust", label: "Rust" },
        { value: "Nodejs", label: "Nodejs" },
        { value: "React", label: "React" },
      ],
    },
  ];

  const handleTechStackChange = (selectedOptions) => {
    dispatch(clearTechStack());
    selectedOptions.forEach((option) => {
      dispatch(addTechStack(option.value));
    });
  };

  const handleRemoveTechStack = (removedTechStack) => {
    dispatch(removeTechStack(removedTechStack)); // Remove the selected TechStack
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
        placeholder="Tech Stack"
        options={TechStackOptions}
        value={selectedTechStack.map((techStack) => ({
          value: techStack,
          label: techStack,
        }))}
        onChange={handleTechStackChange}
        onRemove={handleRemoveTechStack}
        isMulti
        isSearchable
        isClearable
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
}
