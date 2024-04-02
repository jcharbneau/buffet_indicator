import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
    return (
        <div className="bg-white mt-10 h-full">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto pb-24 pt-10 sm:pb-42 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8 lg:py-30">
                    <div className="w-full px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="w-full">
                                <h1 className="mt-4 text-align-l text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl italic text-left">
                                    Building the Buffet Indicator
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                                    For this project, we are going to build a complete end to end solution that will meet the below criteria.
                                </p>
                                <p className="mt-6 text-left">
                                    {/*<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Project*/}
                                    {/*    requirements:</h2>*/}
                                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                        <li>Retrieve the Wilshire 5000 US GDP Values</li>
                                        <li>Process & Publish this data using Python</li>
                                        <li>Present the data visually</li>
                                    </ul>
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#docs"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Documentation
                                    </a>
                                    <a href="https://github.com/jcharbneau/buffet_indicator" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">*/}
                    {/*    <div*/}
                    {/*        className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"*/}
                    {/*        aria-hidden="true"*/}
                    {/*    />*/}
                    {/*    <div className="shadow-lg md:rounded-3xl">*/}
                    {/*        <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">*/}
                    {/*            <div*/}
                    {/*                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"*/}
                    {/*                aria-hidden="true"*/}
                    {/*            />*/}
                    {/*            <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">*/}
                    {/*                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">*/}
                    {/*                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">*/}
                    {/*                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">*/}
                    {/*                            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">*/}
                    {/*                                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">*/}
                    {/*                                    NotificationSetting.jsx*/}
                    {/*                                </div>*/}
                    {/*                                <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="px-6 pb-14 pt-6">#!/usr/bin/env python</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div*/}
                    {/*                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"*/}
                    {/*                    aria-hidden="true"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}
