import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('Home');

    useEffect(() => {
        // Function to identify the currently active section based on scroll position
        const findActiveSection = () => {
            const sections = ['home', 'charts', 'docs', 'about']; // Add more section IDs as needed
            let activeSection = 'home'; // Default section

            for (let id of sections) {
                const section = document.getElementById(id);
                // Use a threshold to determine when a section is considered active
                const sectionThreshold = window.scrollY + window.innerHeight / 3;
                if (section && section.offsetTop <= sectionThreshold) {
                    activeSection = id;
                }
            }

            setActiveItem(activeSection);
        };

        // Call findActiveSection on scroll and on initial render
        window.addEventListener('scroll', findActiveSection);
        findActiveSection(); // Initialize the active section based on current scroll position

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', findActiveSection);
    }, []);

    // Function to handle item click, for SPA behavior you might adjust this function
    const handleItemClick = (itemName) => () => {
        setActiveItem(itemName);
    };

    const itemClassNames = (itemName) => {
        return `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
            activeItem === itemName
                ? 'border-indigo-500 text-gray-900'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`;
    };

    return (
        <Disclosure as="nav" className="w-full bg-white fixed ">
            {({ open }) => (
                <>
                    {/*<div className="mx-auto w-full bg-white">*/}
                    <div className="w-full max-w-7xl h-full bg-white" style={{ backgroundColor: '#ffffff', color:'#000000' }}>

                    <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <a
                                        href="#" // Adjust the href for SPA or regular navigation as needed
                                        onClick={handleItemClick('home')}
                                        className={itemClassNames('home')}
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#charts" // Adjust the href for SPA or regular navigation as needed
                                        onClick={handleItemClick('charts')}
                                        className={itemClassNames('charts')}
                                    >
                                        Charts
                                    </a>
                                    <a
                                        href="#docs" // Adjust the href for SPA or regular navigation as needed
                                        onClick={handleItemClick('docs')}
                                        className={itemClassNames('docs')}
                                    >
                                        Documentation
                                    </a>
                                    <a
                                        href="#about" // Adjust the href for SPA or regular navigation as needed
                                        onClick={handleItemClick('about')}
                                        className={itemClassNames('about')}
                                    >
                                        About
                                    </a>
                                </div>
                            </div>
                            {/*<div className="flex items-center">*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"*/}
                            {/*    >*/}
                            {/*        <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
