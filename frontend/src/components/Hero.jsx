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
                                <div className="mt-6 text-left">
                                    {/*<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Project*/}
                                    {/*    requirements:</h2>*/}
                                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                        <li>Retrieve the Wilshire 5000 &amp; US GDP Values</li>
                                        <li>Process &amp; Publish this data using Python</li>
                                        <li>Present the data visually</li>
                                    </ul>
                                </div>
                                <div className="mt-10 flex items-center gap-x-6">
                                    {/*<a*/}
                                    {/*    href="#charts"*/}
                                    {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                    {/*>*/}
                                    {/*    Charts*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href="#docs"*/}
                                    {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                    {/*>*/}
                                    {/*    Documentation*/}
                                    {/*</a>*/}
                                    <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                       href="https://github.com/jcharbneau/buffet_indicator" target="_blank">
                                        View on GitHub <span className="bg-indigo-600 text-white" aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*<div className="aspect-w-16 aspect-h-9 mt-10 ">*/}
                    {/*    <iframe src="https://www.youtube.com/embed/PMV1DIrFSKk" frameBorder="0"*/}
                    {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                    {/*            allowFullScreen></iframe>*/}
                    {/*</div>*/}
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}
