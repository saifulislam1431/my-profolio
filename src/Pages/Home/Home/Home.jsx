import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Projects from '../../Projects/Projects';
import Marquee from "react-fast-marquee";
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <section className='overflow-hidden'>
            <div className='my-5 bg-gray-200 py-4'>
                <Marquee speed={30}>
                    <p className='font-bold text-[#7d80c7] text-xl'> <span> ...</span>  Stay tuned as my portfolio site undergoes a transformative makeover, bringing you a fresh burst of creative brilliance. Prepare to be amazed! </p>
                </Marquee>

            </div>
            <Banner />
            <About />
            <Projects />
            <Faq />
            <Contact />
        </section>
    );
};

export default Home;