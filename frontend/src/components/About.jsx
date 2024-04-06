import React from 'react';
// import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'
import jlc_profile_pic from '../assets/jlc.jpeg';
import linkedin_icon from '../assets/LI-Logo.png';
import github_icon from '../assets/github-mark.png';

const About = () => {
    const text = "About text goes here";
    return (
        <>
            <div className="w-full max-w-7xl h-full pt-20 bg-white" style={{ backgroundColor: '#ffffff', color:'#000000' }}>
                <div className="flex text-left w-full py-4">
                    <h1 className="text-left text-black text-xl px-4">About</h1>
                </div>

                <div className="about-content-wrapper">

                    <div className="jlc-image-wrapper">
                        <img src={jlc_profile_pic} alt="Jesse Charbneau" className="jlc-image-class"/>
                    </div>
                    <div className="w-full text-black">
                        Another bright idea by Jess!
                    </div>
                </div>
            </div>


        </>
    )
}

export default SectionWrapper (About, "about")