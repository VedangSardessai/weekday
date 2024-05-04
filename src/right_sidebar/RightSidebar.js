import React from "react";
import "./right_sidebar.css";

function RightSideBar() {
  return (
    <div className="right-sidebar-container">
      <div className="user-profile">
        <svg
          className="profile-svg"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PersonIcon"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      </div>

      <span className="right-border-span"></span>

      <div className="edit-profile-div">
        <svg
          className="pencil-svg"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="EditIcon"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
        </svg>
        <p className="right-heading">
          Edit Profile
        </p>
      </div>
    </div>
  );
}

export default RightSideBar;
