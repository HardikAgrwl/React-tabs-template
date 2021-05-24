import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }
  const { title, dates, duties } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* Button Container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* Job Info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4 className="job-date">{dates}</h4>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
export default App;
