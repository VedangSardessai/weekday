import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/slices/search-slice";
export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const text = useSelector((state) => state.search.searchTerm);

  useEffect(() => console.log(text));

  return (
    <div
      style={{
        width: "fit-content",
        margin: 5,
      }}
      className="input-container"
    >
      <input
        type="text"
        className="search-input"
        placeholder="Search Company Name"
        onChange={handleSearchChange}
      />
    </div>
  );
}
