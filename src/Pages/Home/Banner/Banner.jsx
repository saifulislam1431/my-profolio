import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import animationImg from "../../../assets/animation/62773-yoga-developer.json";
import { HiDocumentDownload, HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ReactTextTransition, { presets } from "react-text-transition";
import TextTransition from 'react-text-transition';
import { HiEnvelope, HiOutlineEnvelope } from 'react-icons/hi2';

const texts = ["Front-End.", "MERN Stack.", "React.JS."];

const Banner = () => {

    const [index, setIndex] = useState(0);


    useEffect(() => {
        let interval = setInterval(() => setIndex((index) => index + 1), 2500);
        return () => clearInterval(interval);
    }, []);



    return (
        <section className="lg:px-10">
            <div className="hero my-10 lg:my-20">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <div className="max-w-sm rounded-md shadow-md" >
                        <Lottie animationData={animationImg} loop={true} className='w-full lg:w-96' />
                    </div>
                    <div>
                        <h1 className='font-semibold text-primary mb-2'>Welcome!!</h1>
                        <div className="text-2xl lg:text-4xl font-bold inline-flex items-center gap-2">
                            <span>In my world of</span>
                            <span className='text-primary'> <TextTransition springConfig={presets.gentle}>
                                {texts[index % texts.length]}
                            </TextTransition></span>
                        </div>
                        <p className="py-4 font-medium">I'm ready for helping design and develop your business and personal website with your demand by HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node, Firebase, MongoDB.</p>
                        <div className='inline-flex gap-3 items-center'>
                            <a href='Saifulislam_resume.pdf' download="Saifulislam_resume.pdf" className="myBtn inline-flex items-center"> <HiDocumentDownload className='h-6 w-6' /> Download Resume</a>
                            <a href="mailto:saifulislam140301@gmail.com" className="myBtn inline-flex items-center cursor-pointer gap-1"> Hire Me <HiOutlineEnvelope className='h-6 w-5'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;