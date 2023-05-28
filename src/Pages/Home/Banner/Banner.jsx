import React from 'react';
import Lottie from "lottie-react";
import animationImg from "../../../assets/animation/62773-yoga-developer.json";
import { HiDocumentDownload, HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="lg:px-10">
            <div className="hero my-10 lg:my-20">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <div className="max-w-sm rounded-md shadow-md" >
                        <Lottie animationData={animationImg} loop= {true} className='w-full lg:w-96'/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-primary mb-2'>Welcome!!</h1>
                        <h1 className="text-3xl lg:text-5xl font-bold">In my own <span className='text-gradient'>frontend</span> world.</h1>
                        <p className="py-4 font-medium">I'm ready for helping design and develop your business and personal website with your demand by HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node, Firebase, MongoDB.</p>
                        <div className='inline-flex gap-3 items-center'>
                        <a href='Saifulislam_resume.pdf' download="Saifulislam_resume.pdf" className="myBtn inline-flex items-center"> <HiDocumentDownload className='h-6 w-6'/> Download Resume</a>
                        <Link to="/contact" className="myBtn inline-flex items-center"> Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;