import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image } from 'antd';
import JobService from "../../api/job.service";

const JobDetail = () => {
  const [job, setJob] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await JobService.getJob(id);
      setJob(data);
    };
    fetch();
  }, [id]);

  return <>
    <h1>{job?.title}</h1>
    <Image src={job?.coverImage} />
    <div>{job?.description}</div>
  </>;
};

export default JobDetail;
