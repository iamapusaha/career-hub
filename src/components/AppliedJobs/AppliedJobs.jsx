import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStore";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayedJobs, setDisplayedJobs] = useState([])
    const jobs = useLoaderData();

    const handleFilterJob = filter => {
        if (filter === 'all') {
            setDisplayedJobs(appliedJobs)

        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === "Remote")
            setDisplayedJobs(remoteJobs)
        }
        else if (filter === 'on-site') {
            const OnSiteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === "Onsite")
            setDisplayedJobs(OnSiteJobs)
        }

    }
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length) {
            // const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayedJobs(jobsApplied)

        }

    }, [jobs]);

    return (
        <div className="my-5">
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilterJob('all')}><a>All</a></li>
                    <li onClick={() => handleFilterJob('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilterJob('on-site')}><a>On Site</a></li>
                </ul>
            </details>
            {
                displayedJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;