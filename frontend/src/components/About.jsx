import React from 'react';
// import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'

const About = () => {
    const text = "About text goes here";
    return (
        <>
            <div className="w-full max-w-7xl h-full pt-20">
                <div className={`${styles.padding} bg-gray-500 border-0  min-h-screen`}>
                    <motion.div variants={textVariant()} className="bg-transparent">
                        <p className={`${styles.sectionSubText} bg-transparent text-white`}>We are ...</p>
                        {/*<h2 className={` ${styles.sectionHeadText} bg-transparent`}>SecFul</h2>*/}
                        <h1 className="overflow-hidden text-2xl  bg-transparent font-bold leading-6 text-white">
                            {text.match(/./gu).map((char, index) => (
                                <span
                                className=" bg-transparent animate-text-reveal inline-block [animation-fill-mode:backwards]"
                                key={`${char}-${index}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                                >
                            {char === " " ? "\u00A0" : char}
                                </span>
                                ))}
                        </h1>
                    </motion.div>




                </div>
                <motion.span
                    variants={fadeIn("","",0.1,1)}
                    className="mt-1 text-black text-[17px] w-full  pl-5 pt-2 mr-5 "
                >
                    Motion goes here

                </motion.span>
            </div>
        </>
    )
}

export default SectionWrapper (About, "about")