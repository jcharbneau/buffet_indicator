import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { SectionWrapper } from "../hoc/index.js";
import { fetchMarketInsights, fetchMarketTrends } from "../utils/api.js";

const options = {
    title: "Economic Performance",
    curveType: "function",
    legend: { position: "bottom" },
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
// Sample transformation of fetched data to the format expected by Google Charts
const transformDataForChart = (apiData) => {
    // Assuming apiData is an array of objects like:
    // [{ date: '2021', sales: 1000, expenses: 400 }, { date: '2022', sales: 1170, expenses: 460 }]
    // And you want to transform it to the format Google Charts expects

    // First, prepare the header row
    const headers = ['Date', 'GDP', 'Wilshire 5k'];

    // Then, map each object in the array to an array of values
    const rows = apiData.map(item => [
        item.date,
        // item.latest_buffett_indicator ? parseFloat(item.latest_buffett_indicator) : 0,
        item.latest_gdp_value ? parseFloat(item.latest_gdp_value) : 0,
        item.latest_wilshire_value ? parseFloat(item.latest_wilshire_value) : 0
    ]);

    // Combine headers with rows
    return [headers, ...rows];
};

const Charts = () => {
    const [marketInsights, setMarketInsights] = useState([]);
    const [marketTrends, setMarketTrends] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const insightsData = await fetchMarketInsights();
                const transformedData = transformDataForChart(insightsData);
                setMarketInsights(transformedData);
            } catch (error) {
                console.error('Failed to fetch or transform data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <div className="w-full max-w-7xl h-full pt-20">
                <h2 className="text-black text-xl text-left pl-2">Current Economic Values</h2>
                <dl className="mx-auto text-left grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.name}
                            className="flex flex-wrap items-baseline justify-between gap-x-0 gap-y-2 bg-white px-4 py-5 sm:px-6 xl:px-8"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
                            <dd
                                className={classNames(
                                    stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                                    'text-xs font-medium'
                                )}
                            >
                                {stat.change}
                            </dd>
                            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
                {marketInsights.length > 0 && (
                    <div className="text-left flex flex-shrink px-6 py-6">
                        <Chart
                            chartType="LineChart"
                            width="90%"
                            height="400px"
                            data={marketInsights}
                            options={options}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default SectionWrapper(Charts, "charts");
