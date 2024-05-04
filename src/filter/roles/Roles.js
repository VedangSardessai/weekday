import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRole, removeRole, clearRoles } from "../../redux/slices/role-slice";
import Select from "react-select";

export default function Roles({ formatOptionLabel, customStyles }) {
  const dispatch = useDispatch();
  const selectedRoles = useSelector((state) => state.role.selectedRoles);

  useEffect(() => console.log(selectedRoles));
  const rolesOptions = [
    {
      label: "Engineering",
      options: [
        { value: "backend", label: "backend" },
        { value: "frontend", label: "frontend" },
        { value: "fullstack", label: "fullstack" },
        { value: "ios", label: "ios" },
        { value: "flutter", label: "flutter" },
        { value: "react native", label: "react native" },
        { value: "android", label: "android" },
        { value: "tech lead", label: "tech lead" },
        { value: "Dev-Ops", label: "Dev-Ops" },
        { value: "data engineer", label: "data engineer" },
        { value: "Computer-Vision", label: "Computer-Vision" },
        { value: "Nlp", label: "Nlp" },
        { value: "test/qa", label: "test/qa" },
        { value: "Deep-Learing", label: "Deep-Learing" },
        { value: "web3", label: "web3" },
      ],
    },
    {
      label: "Design",
      options: [
        { value: "designer", label: "designer" },
        { value: "design manager", label: "design manager" },
        { value: "graphic designer", label: "graphic designer" },
      ],
    },
    {
      label: "Product",
      options: [{ value: "product manager", label: "product manager" }],
    },
    {
      label: "Operations",
      options: [
        { value: "operations manager", label: "operations manager" },
        {
          value: "founder's office/chief of staff",
          label: "founder's office/chief of staff",
        },
      ],
    },
    {
      label: "Sales",
      options: [
        {
          value: "sales development representative",
          label: "sales development representative",
        },
        {
          value: "account executive",
          label: "account executive",
        },
        {
          value: "account manager",
          label: "account manager",
        },
      ],
    },

    {
      label: "Marketing",
      options: [
        {
          value: "digital marketing manager",
          label: "digital marketing manager",
        },
      ],
    },
    {
      label: "Other Engineering",
      options: [
        { value: "hardware", label: "hardware" },
        { value: "mechanical", label: "mechanical" },
        { value: "systems", label: "systems" },
      ],
    },
    {
      label: "Business Analyst",
      options: [{ value: "Business Analyst", label: "Business Analyst" }],
    },
    {
      label: "Data Analyst",
      options: [{ value: "Data Analyst", label: "Data Analyst" }],
    },
  ];

  useEffect(() => console.log(selectedRoles));

  const handleRoleChange = (selectedOptions) => {
    dispatch(clearRoles());
    selectedOptions.forEach((option) => {
      dispatch(addRole(option.value));
    });
  };

  const handleRemoveRole = (removedRole) => {
    dispatch(removeRole(removedRole)); // Remove the selected role
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
        className="roles-input"
        placeholder="Roles"
        options={rolesOptions}
        value={selectedRoles.map((role) => ({ value: role, label: role }))}
        onChange={handleRoleChange}
        onRemove={handleRemoveRole}
        isMulti
        isSearchable
        isClearable
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        noOptionsMessage={() => "No Roles Found!"}
      />
    </div>
  );
}
