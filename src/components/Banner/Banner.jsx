import img from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex items-center bg-[#F9F9FF]'>
            <div>
                <h1 className="text-7xl font-extrabold mb-6">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Dream Job</span></h1>
                <p className="text-lg font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-5 px-7 rounded-lg">Get Started</button>

            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;