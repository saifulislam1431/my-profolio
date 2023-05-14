import React from 'react';
import heroImg from "../../../assets/logo/myPhoto2.jpg"
import Specializations from './specializations';
import Skills from './Skills';

const About = () => {
    return (
        <section className='my-16'>
            <div>
                <div>

                    <div className='text-center'>
                        <p className='text-primary font-bold text-xl mb-3'>About Me</p>
                        <h1 className="text-3xl lg:text-4xl font-bold">Every great design begin with an even <span className='text-gradient'>better story</span></h1>
                    </div>

                    <div className="hero mt-10 px-5">
                        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                            <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl h-96" alt='Saiful Image' />
                            <div>
                                <h1 className="text-4xl font-bold">Hey! I'm <span className='text-gradient'>Saiful Islam</span></h1>
                                <p className="py-6">As a developer, I'm an expert in a range of technologies including Firebase, MongoDB, React, JavaScript, Express, CSS, and HTML.
                                    These tools allow me to create responsive, dynamic websites and applications that not only look great but also work seamlessly on various devices and platforms.</p>
                                <p>
                                    With React, I enjoy creating modular and scalable components, taking full advantage of its declarative syntax and efficient rendering.
                                    In addition, I have experience working with Express and building RESTful APIs to deliver data to the client-side.
                                </p>
                                <p>
                                    I'm a dedicated and creative front-end developer who is passionate about crafting stunning websites and applications that bring value to users.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='my-10'>
                        <Specializations />
                    </div>
                    <div className='my-5'>
                        <Skills />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;