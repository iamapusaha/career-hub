import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStore";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length) {
            // const filterJob = jobs.filter(job => storedJobsId.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
        }
    }, [])
    return (
        <div>
            <h1>Hello {appliedJobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;