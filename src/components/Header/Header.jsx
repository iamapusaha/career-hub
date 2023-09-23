import { NavLink } from "react-router-dom";


const Header = () => {
    const menuItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#F9F9FF]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItem}
                    </ul>
                </div>
                <a className="text-4xl font-extrabold text-[#1A1919]">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;