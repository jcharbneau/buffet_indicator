# app/schemas.py
from pydantic import BaseModel, Field
from datetime import date
from typing import Optional

class MarketInsightSchema(BaseModel):
    id: int = Field(default=None)
    date: date
    buffett_indicator: Optional[float] = None
    wilshire_value: Optional[float] = None
    gdp_value: Optional[float] = None
    gdp_growth_rate: Optional[float] = None  # New field for GDP growth rate
    wilshire_growth_rate: Optional[float] = None  # New field for Wilshire growth rate

    class Config:
        from_attributes = True

class MarketTrendSchema(BaseModel):
    trend_id: int = Field(default=None)
    date: date
    buffett_indicator: Optional[float] = None
    moving_average_6m: Optional[float] = None
    moving_average_12m: Optional[float] = None
    volatility_12m: Optional[float] = None

    class Config:
        from_attributes = True
