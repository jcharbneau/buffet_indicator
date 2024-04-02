import React from 'react';
import { Chart } from "react-google-charts";

import {SectionWrapper} from "../hoc/index.js";
const stats = [
    { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]
export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];

export const options = {
    title: "Economic Performance",
    curveType: "function",
    legend: { position: "bottom" },
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Charts = () => {
    return (
        <>
            <div className="w-full max-w-7xl h-full pt-20">
                <h2 className="text-black text-xl text-left pl-2">Current Economic Values</h2>
                <dl className="mx-auto text-left grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.name}
                            className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-2 bg-white px-4 py-5 sm:px-6 xl:px-8"
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
                <div className="text-left flex  flex-shrink px-6 py-6">
                    <Chart
                        chartType="LineChart"
                        width="90%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
            </div>

        </>
    )
}

export default SectionWrapper (Charts, "charts")
