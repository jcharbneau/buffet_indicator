// api.js
const API_URL = 'http://localhost:8000';
    // process.env.REACT_APP_API_URL;

export const fetchMarketInsights = async () => {
    const response = await fetch(`${API_URL}/v1/market_insights`);
    if (!response.ok) {
        throw new Error('Failed to fetch market insights');
    }
    return await response.json();
}

export const fetchMarketTrends = async () => {
    const response = await fetch(`${API_URL}/v1/market_trends`);
    if (!response.ok) {
        throw new Error('Failed to fetch market trends');
    }
    return await response.json();
}


