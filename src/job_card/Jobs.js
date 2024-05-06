import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./jobs.css";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const selectedRoles = useSelector((state) => state.role.selectedRoles);
  const selectedNumberOfEmployees = useSelector(
    (state) => state.employee.selectedNumberOfEmployees
  );
  const selectedExperience = useSelector(
    (state) => state.experience.selectedExperience
  );
  const selectedWorkMode = useSelector((state) => state.work.selectedWorkMode);
  const selectedSalary = useSelector((state) => state.salary.selectedSalary);
  const searchString = useSelector((state) => state.search.searchTerm);
  const selectedTechStack = useSelector(
    (state) => state.tech.selectedTechStack
  );

  useEffect(() => {
    console.log(selectedRoles);
    console.log(selectedNumberOfEmployees);
    console.log(selectedExperience);
    console.log(selectedWorkMode);
    console.log(selectedSalary);
    console.log(searchString);
    console.log(selectedTechStack);
    fetchJobs(1);
  }, [
    selectedRoles,
    selectedNumberOfEmployees,
    selectedExperience,
    selectedWorkMode,
    selectedSalary,
    searchString,
  ]);

  function fetchJobs(page) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: (page - 1) * 10,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.jdList.length === 0) {
          setHasMore(false);
        } else {
          // Update state with filtered jobs
          setJobs([...jobs, ...result.jdList]);
          setPageNumber(page + 1);
        }
      })
      .catch((error) => console.error(error));
  }

  const fetchMoreData = () => {
    fetchJobs(pageNumber);
  };

  function removeNonNumericChars(str) {
    let numString = "";

    for (let i = 0; i < str.length; i++) {
      if (/[0-9]/.test(str[i])) {
        numString += str[i];
      }
    }

    return numString;
  }

  const convertToCompany = (numberString) => {
    const letters = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      "-": "-",
    };

    let result = "";
    for (let i = 0; i < numberString.length; i++) {
      result += letters[numberString[i]];
    }
    return result;
  };
  return (
    <>
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div
            style={{
              position: "absolute",
              left: "50%",
              marginBottom: "15px",
            }}
          >
            {hasMore ? (
              <TailSpin
                visible={true}
                height="40"
                width="40"
                color="indigo"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <p>No jobs found</p>
            )}
          </div>
        }
        endMessage={
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {jobs.length === 0 && <p>No jobs found</p>}
            {jobs.length > 0 && <p>No more jobs to load</p>}
          </div>
        }
      >
        <div className="jobs-container">
          {jobs.map((job, index) => {
            console.log(removeNonNumericChars(selectedSalary.toString()));
            console.log(searchString);

            if (
              (selectedRoles.length === 0 ||
                selectedRoles.includes(job.jobRole.toLowerCase())) &&
              (selectedExperience.length === 0 ||
                job.minExp <= parseInt(selectedExperience)) &&
              (selectedSalary.length === 0 ||
                parseInt(job.minJdSalary) >=
                  parseInt(removeNonNumericChars(selectedSalary.toString()))) &&
              (selectedTechStack.length === 0 ||
                selectedRoles.includes(job.jobRole.toLowerCase())) &&
              (selectedWorkMode.length === 0 ||
                (selectedWorkMode.includes("Remote") &&
                  job.location === "remote") ||
                (selectedWorkMode.includes("Hybrid") &&
                  job.location === "hybrid") ||
                (selectedWorkMode.includes("In-Office") &&
                  job.location !== "remote" &&
                  job.location !== "hybrid")) &&
              (selectedTechStack.length === 0 ||
                selectedTechStack.some((tech) =>
                  job.jobDetailsFromCompany
                    .toLowerCase()
                    .includes(tech.toLowerCase())
                )) &&
              (searchString.length === 0 ||
                convertToCompany(job.jdUid.slice(-10)).includes(searchString))
            ) {
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  key={job.jdUid + index}
                  className="job-card"
                >
                  <div className="posted-ago">
                    <p className="posted-para">⏳ Posted 15 days ago</p>
                  </div>
                  <div className="company-role-location">
                    <span className="left-span">
                      <img
                        height={40}
                        width={28}
                        className=""
                        src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598325603_7ico7.jpg"
                        alt="logo"
                      />
                    </span>
                    <span className="right-span">
                      <p
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          marginTop: "5px",
                        }}
                      >
                        {convertToCompany(job.jdUid.slice(-10)) + " Company"}
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "14px",
                          marginTop: "0px",
                        }}
                        className="job-role"
                      >
                        {job.jobRole}
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          marginTop: "5px",
                        }}
                        className="location"
                      >
                        {job.location}
                      </p>
                    </span>
                  </div>
                  <p className="estimate-salary-para">
                    Estimated Salary: {job.minJdSalary}
                    {job.minJdSalary && "K -"} {job.maxJdSalary}K{" "}
                    {job.salaryCurrencyCode}
                    <span aria-label="Offered salary range" className="">
                      {" "}
                      ✅
                    </span>
                  </p>
                  <p
                    style={{
                      marginBottom: "-12px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    About Company:
                  </p>
                  <p
                    style={{
                      marginBottom: "-12px",
                      fontSize: "small",
                      fontWeight: "500",
                    }}
                  >
                    About us:
                  </p>
                  <p className="job-details">
                    {job.jobDetailsFromCompany}
                    <span className="fade"></span>
                  </p>
                  {job.jobDetailsFromCompany.length > 400 && (
                    <div className="view-more-container">
                      <a href={job.jdLink} className="view-more">
                        View Job
                      </a>
                    </div>
                  )}

                  <h4
                    style={{
                      marginTop: "10px",
                      // fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      color: "#8b8b8b",
                      marginBottom: "3px",
                    }}
                  >
                    Minimum Experience
                  </h4>
                  <p>
                    {" "}
                    {job.minExp
                      ? job.minExp + " years"
                      : "Any relevant experience is welcome"}{" "}
                  </p>

                  <button
                    onClick={() => console.log("Button clicked")}
                    className="easy-apply"
                  >
                    ⚡ Easy Apply
                  </button>
                </motion.div>
              );
            }
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

//Company name, work mode
