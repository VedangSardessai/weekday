import React from "react";
import "./more-info.css";

export default function MoreJobInfo({ aboutCompany, aboutRole, expanded }) {
  return (
    <div className={"more-info-parent"}>
      <div className="more-info-container">
        <div className="aboutCompany">
          <h4>About Company</h4>
          {aboutCompany}
        </div>
      </div>
      <div className="aboutCompany">
        <h4>About Role</h4>
        {Array.from({ length: 4 }).map((_, index) => (
          <p
            key={index}
            style={{
              paddingTop: "10px",
            }}
          >
            {aboutRole}
          </p>
        ))}
      </div>
    </div>
  );
}
