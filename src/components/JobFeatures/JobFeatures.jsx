
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import JobFeature from '../JobFeature/JobFeature';
// import JobFeature from '../JobFeature/JobFeature';

const JobFeatures = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h2 className="text-5xl font-extrabold mb-4">Featured Jobs</h2>
                <p className="text-base font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0, dataLength).map(job => <JobFeature key={job.id} job={job}></JobFeature>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className='my-6  text-lg font-extrabold text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-4 rounded'>See All Jobs</button>
            </div>
        </div >
    );
};

JobFeatures.propTypes = {

};

export default JobFeatures;