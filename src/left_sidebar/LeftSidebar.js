import React from "react";
import "./left_sidebar.css";

function LeftSideBar() {
  return (
    <div className="left-sidebar-container">
      <div className="logo">
        <img
          width={50}
          src="	https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png
"
          alt=""
        />
      </div>

      <span className="border-span"></span>

      <div>
        <div>
          <div></div>
          <p className="get-jobs-icons">GET JOBS</p>
          <div className="get-jobs-icons">
            <div>
              <span aria-label="My applied jobs" className="icon-div">
                <svg
                  className="icon-svg"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PermIdentityOutlinedIcon"
                >
                  <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"></path>
                </svg>
              </span>
            </div>
            <div>
              <span aria-label="Search jobs" className="icon-div">
                <svg
                  className="icon-svg"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SearchOutlinedIcon"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
                </svg>
              </span>
            </div>
            <span aria-label="Search salary" className="icon-div">
              <svg
                className="icon-svg"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CurrencyRupeeIcon"
              >
                <path d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z"></path>
              </svg>
            </span>
            <div>
              <span aria-label="Ask for referral" className="icon-div">
                <svg
                  className="icon-svg"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PersonAddAlt1OutlinedIcon"
                >
                  <path d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <span className="border-span"></span>

      <p className="get-jobs-icons">REFER</p>
      <div className="get-jobs-icons">
        <div>
          <span aria-label="Recommend from shortlist">
            <svg
              className="icon-svg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RecommendOutlinedIcon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
              <path d="M17 10h-4.59l.58-3.41v-.2c-.01-.26-.12-.51-.3-.7L12 5l-4.6 5c-.27.26-.42.62-.4 1v5c0 1.1.9 2 2 2h5.5c.56.03 1.08-.29 1.3-.8l2.1-4.9c.08-.15.12-.33.1-.5V11c0-.55-.45-1-1-1"></path>
            </svg>
          </span>
        </div>
        <div>
          <span aria-label="Refer this extension">
            <svg
              className="icon-svg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShareOutlinedIcon"
            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
            </svg>
          </span>
        </div>
      </div>

      <div className="user-image">
        <img
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
          }}
          src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
}

export default LeftSideBar;
