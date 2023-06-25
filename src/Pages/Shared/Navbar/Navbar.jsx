import React from 'react';
import "./Navbar.css";
import logo from "../../../assets/logo/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { HiCode, HiMoon, HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineHome, HiOutlineMicrophone, HiSun } from 'react-icons/hi2';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "mytheme");

    const handleDark = (e) => {
        if (e.target.checked) {
            setTheme("night")
        } else {
            setTheme("mytheme")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])


    const navItem = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "default")}>About</NavLink>
        </li>
        <li>
            <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "default")}>Project</NavLink>
        </li>
        <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "default")}>Portfolio</NavLink>
        </li>
        <li>
            <Link to="/contact" className='bg-transparent'><button className="myBtn inline-flex items-center gap-1"><HiCode className='w-5 h-5' />
                Want to talk?</button></Link>
        </li>

        <label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleDark} checked={theme === "mytheme" ? false : true} />

            {/* sun icon */}
            <HiSun className="swap-on text-yellow-500 w-9 h-9 controlSpin" />

            {/* moon icon */}
            <HiMoon className='swap-off w-9 h-9 text-gray-600 animate-bounce' />

        </label>
    </>
    return (
        <section className='sticky z-50 top-0'>
            <nav className='sticky top-0 z-50'>
                <div className="navbar navBg sticky top-0 py-2">
                    <div className="lg:navbar-start">
                        <div className="dropdown">
                            {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="bg" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label> */}

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <Link to="/" className='hidden lg:flex'>
                            <button className="text-xl inline-flex items-end gap-2">
                                <img src={logo} alt="Logo" className='w-6 h-7' />
                                <span className='text-lg text-gradient font-extrabold heroTitle'>
                                    _saiful Islam
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="lg:navbar-end hidden lg:flex">

                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                    <div className="navbar-center flex lg:hidden">

                        <Link to="/" className='flex lg:hidden'>
                            <button className="text-xl inline-flex items-end gap-2">
                            <img src={logo} alt="Logo" className='w-6 h-7' />
                                <span className='text-lg text-gradient font-extrabold heroTitle'>
                                    _saiful Islam
                                </span>
                            </button>
                        </Link>
                    </div>

                    <div className="navbar-end flex lg:hidden">
                    <label className="swap swap-rotate">

{/* this hidden checkbox controls the state */}
<input type="checkbox" onChange={handleDark} checked={theme === "mytheme" ? false : true} />

{/* sun icon */}
<HiSun className="swap-on text-yellow-500 w-9 h-9 controlSpin" />

{/* moon icon */}
<HiMoon className='swap-off w-9 h-9 text-gray-600 animate-bounce' />

</label>
                    </div>
                </div>

            </nav>
            <div className="btm-nav z-50 rounded-full bg-base bg-opacity-90 lg:hidden mb-3 shadow-2xl border-b-4 border-purple-600">
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-700" : "default")}>
                    <HiOutlineHome className='h-7 w-7' />
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "text-purple-700" : "default")}>
                    <HiOutlineInformationCircle className='h-7 w-7' />
                </NavLink>
                <NavLink to="/project" className={({ isActive }) => (isActive ? "text-purple-700" : "default")}>
                    <HiCode className='h-7 w-7' />
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-purple-700" : "default")}>
                    <HiOutlineMicrophone className='h-7 w-7' />
                </NavLink>


            </div>
        </section>
    );
};

export default Navbar;