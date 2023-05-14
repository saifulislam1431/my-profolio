import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Projects from '../../Projects/Projects';

const Home = () => {
    return (
        <section>
            <Banner />
            <About />
            <Projects />
        </section>
    );
};

export default Home;