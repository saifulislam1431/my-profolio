import React from 'react';
import "./Navbar.css";
import logo from "../../../assets/logo/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { HiCode } from "react-icons/hi";

const Navbar = () => {
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
            <Link to="/contact"  className='bg-transparent'><button className="myBtn inline-flex items-center gap-1"><HiCode className='w-5 h-5'/>
            Want to talk?</button></Link>
        </li>
    </>
    return (
        <nav className='sticky'>
            <div className="navbar navBg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to="/" className='hidden lg:flex'>
                        <button className="text-xl inline-flex items-end gap-1">
                            <img src={logo} alt="" className='w-8 h-12' />
                            <span className='text-2xl text-gradient font-extrabold'>
                                aiful Islam
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end flex lg:hidden">
                    
                <Link to="/" className='flex lg:hidden'>
                        <button className="text-xl inline-flex items-end gap-1">
                            <img src={logo} alt="" className='w-8 h-12' />
                            <span className='text-2xl text-gradient font-extrabold'>
                                aiful Islam
                            </span>
                        </button>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;