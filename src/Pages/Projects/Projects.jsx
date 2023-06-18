import React, { useEffect, useState } from 'react';
import Project from './Project';
import { HiOutlineMinus, HiOutlinePlusSmall } from "react-icons/hi2";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [show , setShow] = useState(false);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <section className='my-10 lg:my-14'>
            <div>
                <div className='text-center'>
                    <p className='font-bold text-xl mb-3'> Showcasing <span className='text-gradient'>My Skills</span></p>
                    <h1 className="text-2xl lg:text-3xl font-bold">A Collection of Projects Highlighting My Talents and Expertise</h1>
                </div>
            </div>
            <div className='my-10 flex items-center justify-center px-5'>
                <div className='grid grid-cols-1 gap-10'>
                    {
                        projects.slice(0, show ? 6 : 3).map(project => <Project
                            key={project.id}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
            <div className='mb-10 text-center'>
                {
                    show ? <button className='myBtn inline-flex items-center gap-2' onClick={()=>setShow(!show)}><HiOutlineMinus className='h-7 w-6'/>Show Less</button> :
                    <button className='myBtn inline-flex items-center gap-2' onClick={()=>setShow(!show)}><HiOutlinePlusSmall className='h-7 w-7'/>Show More</button>
                }
            </div>
        </section>
    );
};

export default Projects;