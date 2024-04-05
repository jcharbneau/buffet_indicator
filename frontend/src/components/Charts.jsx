import React, { useEffect, useState } from 'react';

import { Line, Bar, Scatter } from 'react-chartjs-2';
import 'chartjs-plugin-zoom'; // Only necessary if zoom functionality is desired in the Line chart
import { Chart, registerables, ScatterController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

import { SectionWrapper } from "../hoc/index.js";
import { fetchMarketInsights, fetchMarketTrends } from "../utils/api.js";
import './MarketMetrics.css'; // Make sure the path matches where your CSS file is located

Chart.register(...registerables, ScatterController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

const options = {
    title: "Economic Performance",
    curveType: "function",
    legend: { position: "bottom" },
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Charts = () => {
    const [isOvervalued, setIsOvervalued] = useState(false);
    const [buffettIndicatorStatus, setBuffettIndicatorStatus] = useState('');
    const [buffettIndicatorValue, setBuffettIndicatorValue] = useState('');
    const [wilshireValue, setWilshireValue] = useState('');
    const [wilshireGrowthRate, setWilshireGrowthRate] = useState('');

    const [formattedWilshireGrowthRate, setFormattedWilshireGrowthRate] = useState('');
    const [gdpValue, setGdpValue] = useState('');
    const [gdpGrowthRate, setGdpGrowthRate] = useState('');
    const [latestDate, setLatestDate] = useState('');
    const [formattedGdpGrowthRate, setFormattedGdpGrowthRate] = useState('');

    const [chartData, setChartData] = useState({
        lineChartData: { labels: [], datasets: [] },
        barChartData: { datasets: [] },
    });
    const [isFlipped, setIsFlipped] = useState({
        buffettIndicator: false,
        wilshire5000: false,
        gdpIndicator: false,
        dataDumpDate: false
    });

    const handleFlip = (metric) => {
        setIsFlipped(prevState => ({
            ...prevState,
            [metric]: !prevState[metric]
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const marketInsights = await fetchMarketInsights();
                console.log(marketInsights);

                if (marketInsights && marketInsights.length > 0) {
                    // Transform data for DualAxisLineChart
                    const lineChartData = transformDataForLineChart(marketInsights);
                    // Transform data for BarChartComparison
                    const barChartData = prepareDataForBarChart(marketInsights);

                    setChartData({ lineChartData, barChartData });

                    const latestInsight = marketInsights[marketInsights.length - 3];
                    if (latestInsight.buffett_indicator) {

                        setWilshireValue(latestInsight.wilshire_value);
                        setWilshireGrowthRate(`${(latestInsight.wilshire_growth_rate).toFixed(2)}%`);

                        const formattedGdpValue = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        }).format( latestInsight.gdp_value) + ' B';
                        setFormattedGdpGrowthRate(`${(latestInsight.gdp_growth_rate).toFixed(2)}%`);
                        setGdpValue(formattedGdpValue);
                        setGdpGrowthRate(latestInsight.gdp_growth_rate);

                        const last_date = new Date(latestInsight.date);
                        const formattedDate = new Intl.DateTimeFormat('en-US', {
                            weekday: 'short',
                            month: 'short', // "MMM" format
                            day: '2-digit', // "dd" format
                            year: 'numeric', // "yyyy" format
                        }).format(last_date);
                        setLatestDate(formattedDate);

                        const indicatorValue = latestInsight.buffett_indicator;
                        setBuffettIndicatorValue(`${indicatorValue.toFixed(2)}%`); // Formats the value as a percentage

                        const overvalued = latestInsight.buffett_indicator > 100;
                        setIsOvervalued(overvalued);
                        const message = overvalued
                            ? ['Currently Overvalued ', 'Be cautious buying stocks']
                            : ['Currently Undervalued ', 'Good time to buy stocks'];
                        setBuffettIndicatorStatus(message);
                    } else {
                        setBuffettIndicatorValue('N/A');
                        setBuffettIndicatorStatus(['Data unavailable']);
                    }
                }
            } catch (error) {
                console.error('Error fetching market insights:', error);
            }
        };

        fetchData();
    }, []);


    const transformDataForLineChart = (marketInsights) => {
        const recentData = marketInsights.slice(-52, -2);
        return {
            labels: recentData.map(item => new Date(item.date).toISOString().substring(0, 10)),
            datasets: [
                {
                    label: 'Wilshire 5000 to GDP Ratio',
                    data: recentData.map(item => {
                        const wilshireValue = item.wilshire_value || 0;
                        const gdpValue = item.gdp_value || 0;
                        return gdpValue !== 0 ? (wilshireValue / gdpValue) * 100 : 0; // Ensure no division by zero
                    }),
                    borderColor: '#ff6b6b',
                    yAxisID: 'y',
                },
            ],
        };
    };

    const prepareDataForBarChart = (marketInsights) => {
        // Filter entries with non-null growth rates
        const filteredData = marketInsights.slice(-52, -2).filter(item => item.gdp_growth_rate !== null && item.wilshire_growth_rate !== null);

        return {
            labels: filteredData.map(item => new Date(item.date).getFullYear()), // Extract the year from the date
            datasets: [
                {
                    label: 'GDP Growth Rate',
                    data: filteredData.map(item => item.gdp_growth_rate),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                    label: 'Wilshire 5000 Growth Rate',
                    data: filteredData.map(item => item.wilshire_growth_rate),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
    };



    // Options for DualAxisLineChart
    const lineChartOptions = {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: false,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
        plugins: {
            legend: {
                strokeStyle: '#ff6b6b',
                labels: {
                    color: '#000000', // Text color
                    backgroundColor: '#ff6b6b', // Attempt to set background color (Note: Not a standard option)
                    // Additional styling options here
                },
            },
        },
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio: 2
    };

    // Options for BarChartComparison
    const barChartOptions = {
        responsive: true,
        interactions: {
            intersect: true,
            mode: 'index',
        },
        plugins: {
            legend: {
                position: 'top',
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'x',
                },
            },

        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <>
            <div className="w-full max-w-7xl h-full pt-20">
                <h2 className="text-black text-xl text-left pl-2">Current Economic Insights</h2>
                <dl className="mx-auto text-left grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="market-metrics">
                        <div className={`metric buffett-indicator ${isOvervalued ? 'overvalued' : 'undervalued'}`}>
                            <h2>Buffett Indicator</h2>
                            <div className="indicator-value">{buffettIndicatorValue}</div>
                            <p>{buffettIndicatorStatus[0]}<br/>{buffettIndicatorStatus[1]}</p>
                        </div>

                    </div>
                    {/*<div className="market-metrics">*/}
                    {/*    <div className="flip-card" onClick={() => handleFlip('buffettIndicator')}>*/}
                    {/*        <div className={`flip-card-inner ${isFlipped.buffettIndicator ? 'is-flipped' : ''}`}>*/}
                    {/*            <div className="flip-card-front">*/}
                    {/*                <div className={`metric buffett-indicator ${isOvervalued ? 'overvalued' : 'undervalued'}`}>*/}
                    {/*                    <h2>Buffett Indicator</h2>*/}
                    {/*                    <div className="indicator-value">{buffettIndicatorValue}</div>*/}
                    {/*                    <p>{buffettIndicatorStatus[0]}<br/>{buffettIndicatorStatus[1]}</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flip-card-back">*/}
                    {/*                <p>Information about Buffett Indicator</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="market-metrics">
                        <div className={`metric w5k-indicator ${wilshireValue >= 0 ? 'positive-growth' : 'negative-growth'}`}>
                            <h2>Wilshire 5000 Price Index</h2>
                            <div className="w5k-value">{wilshireValue}</div>
                            <p>{wilshireGrowthRate}</p>
                        </div>
                    </div>
                    <div className="market-metrics">
                        <div className={`metric gdp-indicator ${gdpGrowthRate >= 0 ? 'positive-growth' : 'negative-growth'}`}>
                            <h2>Gross Domestic Product</h2>
                            <div className="gdp-value">{gdpValue}</div>
                            <p>{formattedGdpGrowthRate}</p>
                        </div>
                    </div>
                    <div className="market-metrics">
                        <div className={`metric gdp-indicator positive-growth`}>
                            <h2>Date of Source Data</h2>
                            <div className="gdp-value">{latestDate}</div>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </dl>

                <div className="flex justify-center gap-4">
                    <div className="pt-6 w-[600px] h-[400px] mb-5">
                        <h3>Wilshire 5000 Price Index vs Gross Domestic Product</h3>
                        <Line data={chartData.lineChartData} options={lineChartOptions}/>
                    </div>
                    <div className="pt-6 w-[600px] h-[400px] mb-5">
                        <h3>GDP vs Wilshire 5000 - Growth Rate</h3>
                        <Bar data={chartData.barChartData} options={barChartOptions}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(Charts, "charts");
