
// import PropTypes from 'prop-types';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobFeature = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job
    return (

        <div className='space-y-4 border border-[#E8E8E8] rounded-lg p-10'>
            <img src={logo} alt="" />
            <h2 className='text-2xl font-extrabold text-[#474747]'>{job_title}</h2>
            <h2 className='text-xl font-semibold text-[#757575]'>{company_name}</h2>
            <div className='flex gap-2'>
                <button className='py-1 px-5 rounded text-[#7E90FE] border border-[#7E90FE]'>{remote_or_onsite}</button>
                <button className='py-1 px-5 rounded text-[#7E90FE] border border-[#7E90FE]'>{job_type}</button>
            </div>
            <div className='text-[#757575] flex gap-8'>
                <span className='flex gap-2'><MapPinIcon className='w-6'></MapPinIcon> {location}</span>
                <span className='flex gap-2'><CurrencyDollarIcon className='w-6'></CurrencyDollarIcon> {salary}</span>
            </div>
            <button className='text-lg font-extrabold text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-4 rounded'>View Details</button>
        </div>


    );
};

JobFeature.propTypes = {

};

export default JobFeature;