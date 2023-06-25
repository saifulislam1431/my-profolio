import React from 'react';
import img1 from "../../../assets/icons/development.png";
import img2 from "../../../assets/icons/code.png";
import img3 from "../../../assets/icons/graphic-designer.png";

const Specializations = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-xl mb-3'> My <span className='text-gradient'>Specializations</span></p>
            </div>
            <div className='my-10'>
                <div className='flex flex-col gap-10 lg:flex-row justify-center items-center px-5 overflow-hidden'>
                    <div className='border hover:border-secondary border-accent 
                    hover:transition-all hover:ease-linear
                    hover:duration-300
                    hover:bg-secondary hover:text-white rounded-lg p-4 text-center w-3/4 lg:w-1/2' data-aos="fade-right" data-aos-duration="1300">
                        <div>
                            <img src={img1} alt="Web Development" className='mx-auto' />
                        </div>
                        <h1 className='font-bold text-xl my-2'>Website Design</h1>
                        <p>I create and design site with unique ideas and also use figma</p>
                    </div>

                    <div className='border hover:border-secondary border-accent 
                    hover:transition-all hover:ease-linear
                    hover:duration-300
                    hover:bg-secondary hover:text-white rounded-lg p-4 text-center w-3/4 lg:w-1/2' data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <img src={img2} alt="Web Development" className='mx-auto' />
                        </div>
                        <h1 className='font-bold text-xl my-2'>Development</h1>
                        <p>I build site go live with React, Firebase, MongoDB and more major technologies.</p>
                    </div>

                    <div className='border hover:border-secondary border-accent 
                    hover:transition-all hover:ease-linear
                    hover:duration-300
                    hover:bg-secondary hover:text-white rounded-lg p-4 text-center w-3/4 lg:w-1/2' data-aos="fade-left" data-aos-duration="1300">
                        <div>
                            <img src={img3} alt="Web Development" className='mx-auto' />
                        </div>
                        <h1 className='font-bold text-xl my-2'>Graphic Design</h1>
                        <p>I create abstract shapes using tools Ai,PhotoShop to design more interactive site.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specializations;