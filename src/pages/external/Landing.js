import React, { useEffect, useState } from "react";
import { Card } from "antd";
import JobService from "../../api/job.service";

const { Meta } = Card;

function Landing() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await JobService.getJobs();
      setJobs(data);
    };
    fetch();
  }, []);

  return (
    <>
      {jobs.map((job) => {
        return (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt={job.candidate}
                src={job.avatar}
              />
            }
          >
            <Meta title={job.candidate} description={job.email} />
          </Card>
        );
      })}
    </>
  );
}

export default Landing;
