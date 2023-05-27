import React from 'react';
import Lottie from "lottie-react";
import animation from "../../../assets/animation/76038-contact-mail.json";
const Contact = () => {
    return (
        <section className='my-10 lg:my-14'>
            <div>
                <div className='text-center'>
                    <p className='text-gradient font-bold text-3xl mb-3'>Let's Work Together!</p>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col lg:flex-row gap-5 my-4'>
                <div className='w-full lg:w-1/3'>
<Lottie animationData={animation} loop={true}></Lottie>
                </div>
                <div className='w-full lg:w-1/2'>
                        <form className='flex flex-col'>
                            <label className='text-neutral text-lg mt-2 mb-1'>Name:</label>
                            <input type="text" name="user_name" placeholder="Enter Name" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                            <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                            <input type="email" name="user_email"
                            placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                            <label className='text-neutral text-lg mt-3 mb-1'>Message:</label>

                            <textarea type="text" placeholder="Type Your Suggestion" name="message"className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />


                          <div className='justify-center'>
                          <button className='myBtn my-5'>Send Message</button>
                          </div>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;