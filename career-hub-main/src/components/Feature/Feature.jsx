import React, { useEffect, useState } from "react";

const Feature = () => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="5xl text-center">Feature jobs {job.length}</h2>
      </div>
    </div>
  );
};
export default Feature;
