import React, { useState, useRef, useEffect } from "react";
import { SectionWrapper } from '../hoc';
import './Documentation.css'; // Ensure this CSS file includes the updated styles provided
import data_flow_buffet_indicator from '../assets/data_flow_buffet_indicator.svg';

const Documentation = () => {
    const sections = ['gettingStarted', 'application_arch', 'data_flow', 'troubleshooting'];
    const [activeSection, setActiveSection] = useState(sections[0]);
    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if(ul) {
            const clone = ul.cloneNode(true);
            ul.parentNode.insertBefore(clone, ul.nextSibling);
            clone.setAttribute('aria-hidden', 'true')
        }
    }, [])
    const nextSection = () => {
        const currentIndex = sections.indexOf(activeSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        setActiveSection(sections[nextIndex]);
    };

    const prevSection = () => {
        const currentIndex = sections.indexOf(activeSection);
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        setActiveSection(sections[prevIndex]);
    };
    const handleIndicatorClick = (section) => {
        setActiveSection(section);
    };
    const renderSectionContent = () => {
        switch (activeSection) {
            case 'gettingStarted':
                return (
                    <div className="text-black text-left py-2 pl-4">
                        <h2 className="text-xl">Getting Started</h2>
                        <p className="py-4">This is an example end-to-end project to demonstrate a process and the necessary tools to support
                            retrieving, processing, publishing and presentation of the data to understand the economic outlook</p>
                        <h3 id="usage" className="pt-2">Usage</h3>
                        <p className="py-4">This tooling includes a Docker Compose file, as well as several Dockerfile definition files. If using these containers to run this project, you should not need to install anything. Where needed, I will note any credentials and/or signups necessary to achieve the project results. The following commands , shoudl be executed from a terminal in the top-level project directory.</p>
                        <div className="py-4 px-6">
                            <p className="py-4">To run the complete stack</p>

                            {/* Code Block Styling */}
                            <div className="bg-gray-800 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto" style={{width: '60%'}}>
                                <code>make dev</code>
                            </div>
                        </div>
                        <div className="py-4 px-6">
                            <p className="py-4">
                                To stop the running stack:
                            </p>

                            <div className="bg-gray-800 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto" style={{width: '60%'}}>
                                <code>make stop</code>
                            </div>
                        </div>
                        <div className="py-4 px-6">
                            <p className="py-4">
                                To check the status:
                            </p>

                            <div className="bg-gray-800 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto" style={{width: '60%'}}>
                                <code>make status</code>
                            </div>
                        </div>
                        <div className="py-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="py-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="py-4">

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="py-4">

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                );
            case 'application_arch':
                return(
                    <div className="text-black text-left py-4 pl-4">
                        <h2 className="text-xl text-black text-left">The Application Architecture</h2>
                        <p className="text-black text-left py-4 pl-4">This section attempts to discuss the architectural decisions as they relate to the application, and the overall flow and end to end design.</p>

                        <p className="text-black text-left py-4 pl-4">The architectural design can be found below</p>
                    </div>

                );
            case 'data_flow':
                return(
                    <div className="text-black text-center py-4 pl-4">
                        <h2 className="text-xl text-left">The Data Flow</h2>
                        <div className="py-4 px-4 max-w-2xl mx-auto">
                            <img src={data_flow_buffet_indicator} alt="Diagram of Data Flow"/>
                        </div>
                    </div>

                );
            case 'troubleshooting':
                return(
                    <div className="text-black text-left py-4 pl-4">
                        <h2 className="text-xl text-black text-left">Troubleshooting Tips</h2>
                        <p className="text-black text-left py-4 pl-4">This section attempts to discuss the architectural decisions as they relate to the data, and the overall flow and end to end design.</p>

                    </div>
                );

            default:
                return <div>Section not found</div>;
        }
    };

    return (
        <div className="w-full max-w-7xl h-full pt-20 bg-white" style={{ backgroundColor: '#ffffff', color:'#000000' }}>
        {/*<h2 className="text-xl text-black text-left px-8 pl-16">Documentation</h2>*/}
            <div className="flex text-left w-full py-4">
                <h1 className="text-left text-black text-xl px-4">Documentation</h1>
            </div>
            <div className="documentation-container">
            <div className="carousel-container">
                <div className="arrow left-arrow" onClick={prevSection}>&#10094;</div>
                <div className="content-window border-2">
                    {renderSectionContent()}
                </div>
                <div className="arrow right-arrow" onClick={nextSection}>&#10095;</div>
            </div>
            <div className="carousel-indicators">
                {sections.map((section, index) => (
                    <div
                        key={section}
                        className={`indicator ${activeSection === section ? 'bg-indigo-600' : 'bg-gray-400'} cursor-pointer rounded-full`}
                        onClick={() => handleIndicatorClick(section)} // Ensure this function sets the activeSection state
                    />
                ))}
            </div>
            {/*<div className="developed-using">*/}
            {/*<div className="developed-using w-full max-w-5xl h-full pt-4 bg-white" style={{ backgroundColor: '#ffffff', color:'#000000' }}>*/}

            {/*<h3 id="frontend-built-with" className="py-2 pt-2 text-black text-xl pl-2">Developed using</h3>*/}
            {/*    <div className="w-full py-2 px-2 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">*/}
            {/*        <ul ref={logosRef} className="animate-infinite-scroll flex inline-flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">*/}
            {/*            <li>*/}
            {/*                <a href="https://reactjs.org/" target="_blank">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=ffffff"*/}
            {/*                        alt="React"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="https://tailwindcss.com" target="_blank">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Tailwind+CSS&amp;color=000000&amp;logo=Tailwind+CSS&amp;logoColor=ffffff&amp;label="*/}
            {/*                        alt="TailwindCSS"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="https://vitejs.dev/guide/" target="_blank">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Vite&amp;color=000000&amp;logo=Vite&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="ViteJS"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}

            {/*            <li>*/}
            {/*                <a href="https://www.python.org">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Python&amp;color=000000&amp;logo=Python&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="Python"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="https://fastapi.tiangolo.com">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=FastAPI&amp;color=000000&amp;logo=FastAPI&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="FastAPI"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="https://docs.pytest.org/en/8.0.x/">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Pytest&amp;color=000000&amp;logo=Pytest&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="PyTest"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="https://www.sqlalchemy.org">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=SQLAlchemy&amp;color=000000&amp;logo=SQLAlchemy&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="SQLAlchemy"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}



            {/*            <li>*/}
            {/*                <a href="https://github.com">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=GitHub&amp;color=000000&amp;logo=GitHub&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="GitHub"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="https://www.docker.com/" target="_blank">*/}
            {/*                    <img*/}
            {/*                        src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Docker&amp;color=000000&amp;logo=Docker&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                        alt="Docker"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li><a href="https://www.postgresql.org"><img*/}
            {/*                src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=PostgreSQL&amp;color=000000&amp;logo=PostgreSQL&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                alt="PostgreSQL"/></a></li>*/}
            {/*            <li><a href="https://www.jetbrains.com/pycharm/"><img*/}
            {/*                src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=PyCharm&amp;color=000000&amp;logo=PyCharm&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                alt="PyCharm"/></a></li>*/}
            {/*            <li><a href="https://www.jetbrains.com/webstorm/"><img*/}
            {/*                src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=WebStorm&amp;color=000000&amp;logo=WebStorm&amp;logoColor=FFFFFF&amp;label="*/}
            {/*                alt="WebStorm"/></a></li>*/}
            {/*        </ul>*/}


            {/*    </div>*/}

            {/*</div>*/}
        </div>
        </div>
    );
};

export default SectionWrapper(Documentation, "docs");
