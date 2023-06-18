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
            <Banner />
            <About />
            <Projects />
            <Faq />
            <Contact />
        </section>
    );
};

export default Home;