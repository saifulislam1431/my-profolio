import React from 'react';
import skill1 from "../../../assets/icons/bootstrap-logo.png";
import skill2 from "../../../assets/icons/css-3.png";
import skill3 from "../../../assets/icons/expressjs_logo.png";
import skill4 from "../../../assets/icons/firebase.png";
import skill5 from "../../../assets/icons/html-5.png";
import skill6 from "../../../assets/icons/js.png";
import skill7 from "../../../assets/icons/mongodb.png";
import skill8 from "../../../assets/icons/node.png";
import skill9 from "../../../assets/icons/react.png";
import skill10 from "../../../assets/icons/tailwind-css-icon.png";

const Skills = () => {
    return (
        <section className='my-14 flex items-center justify-center'>
            <div className='overflow-hidden'>
                <div className='text-center'>
                    <p className='font-bold text-xl mb-3'> My <span className='text-gradient'>Advantages</span></p>
                </div>
                <div className='my-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4' data-aos="zoom-in-up" data-aos-duration="1700">
                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill5} alt="HTML" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>90%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill2} alt="CSS" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>90%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill1} alt="Bootstrap" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>80%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill10} alt="tailwind" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>90%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill6} alt="JavaScript" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>80%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill9} alt="React" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>85%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill8} alt="Node JS" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>40%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill3} alt="Express" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>40%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill7} alt="MongoDB" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>70%</h1>
                        </div>
                    </div>

                    <div className='relative py-10 px-10 border-8 rounded-full text-center border-primary border-opacity-100 hover:border-opacity-30 transition-all duration-300'>

                        <img src={skill4} alt="Firebase" className='mx-auto w-10 h-10' />
                        <div className='absolute bg-primary w-full h-full rounded-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200  text-2xl font-extrabold text-white'>
                            <h1 className='w-full h-full flex justify-center items-center'>80%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;