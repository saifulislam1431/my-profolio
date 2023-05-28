import React from 'react';
import Lottie from "lottie-react";
import hero from "../../../assets/animation/138969-programmer-engineering.json";
import { FaAngleDoubleRight } from "react-icons/fa";
const CodeManage = () => {
    return (
        <section className='my-10 lg:my-14'>
            <div>
                <div className='text-center'>
                    <p className='font-bold text-xl mb-3'> Coding <span className='text-gradient'>Structure</span></p>
                    <h1 className="text-2xl lg:text-3xl font-bold">How do I organize of my coding structure</h1>
                </div>
                <div className='flex items-center justify-center px-2 flex-col lg:flex-row gap-10 my-10'>
                    <div className='flex flex-col space-y-6'>
                        <p className='inline-flex items-center'><FaAngleDoubleRight className='text-primary h-6 w-6 mr-2' /><span className='font-semibold text-lg'>Simple and smart React code structure.</span></p>

                        <p className='inline-flex items-center'><FaAngleDoubleRight className='text-primary h-6 w-6 mr-2' /><span className='font-semibold text-lg'>Meaningful comment in each section if necessary.</span></p>

                        <p className='inline-flex items-center'><FaAngleDoubleRight className='text-primary h-6 w-6 mr-2' /><span className='font-semibold text-lg'>Looks good on all devices Responsive code.</span></p>

                        <p className='inline-flex items-center'><FaAngleDoubleRight className='text-primary h-6 w-6 mr-2' /><span className='font-semibold text-lg'>Works reintegrated in any part of the layout.</span></p>

                    </div>
                    <div className='w-full lg:w-[40%]'>
                        <Lottie animationData={hero} loop={true}></Lottie>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeManage;