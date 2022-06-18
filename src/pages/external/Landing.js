import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { getJobs } from "../../api/job.service";

const { Meta } = Card;

function Landing() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getJobs();
      setJobs(data);
    };
    fetch();
  }, []);

  return (
    <>
      {jobs.map((job) => {
        return (
          <Link to={"/job/" + job.id} key={job.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={job.title} src={job.coverImage} />}
            >
              <Meta title={job.title} description={job.email} />
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default Landing;
