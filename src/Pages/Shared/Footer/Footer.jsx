import React from 'react';
import logo from "../../../assets/logo/logo.png"
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/icons/facebook.png";
import icon2 from "../../../assets/icons/github.png";
import icon3 from "../../../assets/icons/linkedin.png";
import icon4 from "../../../assets/icons/twitter.png";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary bg-opacity-20 text-neutral mt-10">
            <div>
                <Link to="/">
                    <button className="text-xl inline-flex items-end gap-2">
                    <img src={logo} alt="Logo" className='w-6 h-7' />
                                <span className='text-lg text-gradient font-extrabold heroTitle'>
                                    _saiful Islam
                                </span>
                    </button>
                </Link>
                <p className="font-bold">
                Providing reliable web services since 2023
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
                <div className="grid grid-flow-col gap-4">
                   <Link to="https://www.facebook.com/sakib.vai143"><img src={icon1} alt="Facebook" className='w-8'/></Link>
                   <Link to="https://github.com/saifulislam1431"><img src={icon2} alt="Github" className='w-8'/></Link>
                   <Link to="https://www.linkedin.com/in/md-saiful-islam-2239a4265/"><img src={icon3} alt="Linkedin" className='w-8'/></Link>
                   <Link to="https://twitter.com/SaifulI31277322"><img src={icon4} alt="Twitter" className='w-8'/></Link>
                </div>
        </footer>
    );
};

export default Footer;