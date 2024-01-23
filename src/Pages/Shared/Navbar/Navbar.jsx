import React from 'react';
import { delay, motion } from "framer-motion";
import "./Navbar.css";
import logo from "../../../assets/logo/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { HiCode, HiMoon, HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineHome, HiOutlineMicrophone, HiSun } from 'react-icons/hi2';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    const animateNavbar = {
        hidden: {
            y: -100
        },
        visible: {
            y: -0,
            duration: 2,
            transition: {
                type: "spring",
                stiffness: 200,
            }
        }
    }

    const animateLogoContainer = {
        hidden: {
            x: -250
        },
        visible: {
            x: -0,
            duration: 2,
            transition: {
                delay: 1,
                type: "spring",
                stiffness: 150,
            }
        }
    }

    const animateLinksContainer = {
        hidden: {
            x: 500
        },
        visible: {
            x: -0,
            duration: 2,
            transition: {
                delay: 1,
                type: "spring",
                stiffness: 150,
            }
        }
    }

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
        {/* <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Portfolio</NavLink>
        </li> */}
        <li>
            <a href="mailto:saifulislam140301@gmail.com" className='bg-transparent'><button className="myBtn inline-flex items-center gap-1"><HiCode className='w-5 h-5' />
                Want to talk?</button></a>
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
        <motion.section className='sticky z-50 top-0 overflow-hidden'>
            <motion.nav className='sticky top-0 z-50'
                variants={animateNavbar}
                initial="hidden"
                animate="visible"
            >
                <div className="navbar navBg sticky top-0 py-2">
                    <div className="lg:navbar-start">
                        <div className="dropdown">
                            {/* <motion.ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                variants={animateLinksContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {navItem}
                            </motion.ul> */}
                        </div>
                        <motion.Link to="/" className='hidden lg:flex'
                            variants={animateLogoContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <button className="text-xl inline-flex items-end gap-2">
                                <img src={logo} alt="Logo" className='w-6 h-7' />
                                <span className='text-lg text-gradient font-extrabold heroTitle'>
                                    _saiful Islam
                                </span>
                            </button>
                        </motion.Link>
                    </div>

                    <motion.div className="lg:navbar-end hidden lg:flex"
                        variants={animateLinksContainer}
                        initial="hidden"
                        animate="visible"
                    >

                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </motion.div>
                    <div className="navbar-center flex lg:hidden">

                        <motion.Link to="/" className='flex lg:hidden'
                            variants={animateLogoContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <button className="text-xl inline-flex items-end gap-2">
                                <img src={logo} alt="Logo" className='w-6 h-7' />
                                <span className='text-lg text-gradient font-extrabold heroTitle'>
                                    _saiful Islam
                                </span>
                            </button>
                        </motion.Link>
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

            </motion.nav>


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
        </motion.section>
    );
};

export default Navbar;