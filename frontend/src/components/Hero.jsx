import { ChevronRightIcon } from '@heroicons/react/20/solid'
import CLIWindow from "./CLIWindow.jsx";

export default function Hero() {
    const cliContent = `    
    wilshire_data = fetch_data(
        'SELECT date, will5000pr FROM pipeline_schema.wilshire_price_index ORDER BY date;'
    )
    gdp_data = fetch_data(
        'SELECT date, gdp FROM pipeline_schema.gdp_value ORDER BY date;'
    )

    # Data conversion and indexing
    wilshire_data['date'] = pd.to_datetime(wilshire_data['date'])
    gdp_data['date'] = pd.to_datetime(gdp_data['date'])
    wilshire_data.set_index('date', inplace=True)
    gdp_data.set_index('date', inplace=True)

    # Data analysis and calculation
    wilshire_quarterly = wilshire_data.resample('Q').last()
    wilshire_quarterly['quarter'] = wilshire_quarterly.index.to_period('Q')
    gdp_quarterly_mapped = gdp_data.groupby(gdp_data.index.to_period('Q'))['gdp'].first()

`;



    return (
        <div className="bg-white mt-10 h-full">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto pb-24 pt-10 sm:pb-42 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8 lg:py-30">
                    <div className="w-full px-16 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="w-full  align-text-top">
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
                                <div className="mt-10 flex items-center gap-x-6 py-6">
                                    <a href="#docs"
                                       className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</a>
                                    <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                       href="https://github.com/jcharbneau/buffet_indicator" target="_blank">
                                        View on GitHub <span className="bg-indigo-600 text-white" aria-hidden="true">→</span>
                                    </a>

                                </div>
                            </div>
                            <CLIWindow content={cliContent} />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}
