
// import PropTypes from 'prop-types';



import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localStore";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === parseInt(idInt))
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    const handleApplyNow = () => {
        saveJobApplication(idInt)
        alert('job applied!')
    }
    return (
        <div className="my-32">
            <div className="grid grid-cols-3 gap-6">
                <div className="text-base font-medium space-y-8 col-span-2">
                    <p><span className="text-[#1A1919] font-extrabold">Job Description:</span> {job_description}</p>
                    <p><span className="text-[#1A1919] font-extrabold">Job Responsibility:</span> {job_responsibility}</p>
                    <p><span className="text-[#1A1919] font-extrabold">Educational Requirements:</span> {educational_requirements}</p>
                    <p><span className="text-[#1A1919] font-extrabold">Experiences:</span> {experiences}</p>
                </div>
                <div>
                    <div className="text-sm font-medium text-[#757575] space-y-4 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-8 rounded-lg mb-6">
                        <h2 className="text-2xl font-extrabold text-[#1A1919]">Job Details</h2>
                        <div className="divider w-3/4"></div>
                        <p><span className="text-[#1A1919] font-extrabold">Salary : </span> {salary}</p>
                        <p> {job_title}</p>
                        <h2 className="text-2xl font-extrabold text-[#1A1919]">Contact Information</h2>
                        <div className="divider w-3/4"></div>
                        <p><span className="text-[#1A1919] font-extrabold">Phone : </span> {contact_information.phone}</p>
                        <p><span className="text-[#1A1919] font-extrabold">Email : </span> {contact_information.email}</p>
                        <p><span className="text-[#1A1919] font-extrabold">Address : </span> {contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyNow} className="text-xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 w-full py-5 rounded-lg">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {

};

export default JobDetails;