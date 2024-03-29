import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../assets/logo/logo.png"
import whatsapp from "../assets/icons/whatsapp.png"
import { useEffect } from 'react';
import { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { motion } from "framer-motion";

AOS.init();

const Main = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <section>
            {
                loading ? <div className="flex flex-col justify-center items-center min-h-[calc(100vh-100px)]">
                    <motion.div
                        animate={{ y: [20, 50, 20], opacity: 1, scale: 0.8 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.1,
                            ease: [0.5, 0.3, 1, 1.5],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 0.2 }}
                    >
                        <img src={logo} alt="Logo" className='w-20 h-24' />
                    </motion.div>
                </div> : <>
                    <Navbar />

                    <div className="fixed bottom-0 right-0 m-8 z-50">
                        <a href="https://api.whatsapp.com/send?phone=8801790272971" target='_blank'>
                            <img src={whatsapp} alt="whatsapp" className='shadow-2xl shadow-secondary rounded-xl w-11 lg:w-[52px]' />

                        </a>
                    </div>
                    <Outlet />
                    <Footer />
                </>
            }

        </section>
    );
};

export default Main;