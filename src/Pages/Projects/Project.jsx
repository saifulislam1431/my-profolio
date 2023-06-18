import React from 'react';
import "./project.css"
import { motion } from "framer-motion";
import { HiCode, HiOutlineCode, HiOutlinePlay } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { HiChevronDoubleRight } from 'react-icons/hi2';
const Project = ({project}) => {
    const {title,description,features,liveLink,clientSide,serverSide,img} = project
    return (
        <section className='my-10'>
            <div  className='flex flex-col lg:flex-row gap-20'>
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='h-80 customScroll scroll-bar style-7'>
                    <img src={img} alt="Image" className='w-96 lg:w-[500px] rounded-lg'/>
                </motion.div>
                <div>
<h1 className='pTitle text-2xl text-primary'>{title}</h1>
<p className='my-2 font-semibold text-gray-400 capitalize'>{description}</p>
<ul className='my-4 font-semibold'>
    {
        features.map((feature,indx)=><li key={indx}><HiChevronDoubleRight className='h-5 w-5 text-primary inline'/>{feature}</li>)
    }
</ul>
                <div className='flex items-center flex-col lg:flex-row justify-start space-y-5 lg:space-y-0 lg:space-x-5'>
                    <Link to={liveLink} className='px-5 py-1 inline-flex items-center gap-1 myBtnSec'><HiOutlinePlay className='h-5 w-5'/> Live</Link>
                    <Link to={clientSide} className='px-5 py-1 inline-flex items-center gap-1 myBtnThd'><HiOutlineCode className='h-5 w-5'/> Client Side</Link>
                    <Link to={serverSide} className='px-5 py-1 inline-flex items-center gap-1 myBtnThd'><HiCode className='h-5 w-5'/> Server Side</Link>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Project;