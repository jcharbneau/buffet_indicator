import React from 'react';

const CLIWindow = ({ content }) => {
    const inlineStyle = {
        backgroundColor: 'rgb(0, 0, 0)', // TailwindCSS bg-gray-800
        color: 'rgb(16, 185, 129)', // TailwindCSS text-green-400
    };

    return (
        <div className="pl-2  md:mx-auto lg:mt-0 lg:w-screen relative justify-self-end pl-12" style={{ backgroundColor: '#ffffff', color:'#000000', overflow: 'hidden', maxHeight: '450px' }}>
            <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-16"
                aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl"  style={{overflow: 'hidden'}}>
                <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]" >
                    <div
                        className="absolute -inset-y-px left-1/2 -z-10 ml-2 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-10 lg:ml-16"
                        aria-hidden="true"
                    />
                    <div className="relative px-6 pt-8 sm:pt-10 md:pl-10 md:pr-0 "  style={{overflow: 'hidden'}}>
                        <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none ">
                            <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900" style={inlineStyle}>
                                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                    <div className="-mb-px flex text-sm font-medium leading-4 text-gray-400">
                                        {/* Tabs or file names can go here */}
                                        <div className="border-b border-r text-white border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2">process_data.py</div>
                                        <div className="border-r border-gray-600/10 px-4 py-2">retrieve_data.py</div>
                                    </div>
                                </div>
                                <div className="px-6 pb-14 pl-2" style={{overflow: 'hidden'}}>
                                    {/* CLI content here */}
                                    <div className="text-[0.8125rem] pl-0 px-6 pb-14 text-green-400 text-left" style={{overflow: 'hidden'}}>
                                        <pre className="avw awo axn">
                                        {content}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div*/}
                        {/*    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"*/}
                        {/*    aria-hidden="true"*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CLIWindow;
