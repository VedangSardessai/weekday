import React from "react";
import './info.css';

export default function InfoBanner() {
  return (
    <div>
      <div className="infobanner-container">
        <p className="info-para">
          We, at Weekday, are creating a go-to hub for uncovering the real
          issues candidates should be aware of before joining a company.{" "}
          <a
            className="info-link"
            target="_blank"
            rel="noopener"
            href="https://www.weekday.works/companies-work-culture-database"
          >
            Access 150+ company reviews here
          </a>
        </p>
      </div>
    </div>
  );
}
