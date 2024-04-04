# app/models.py
from sqlalchemy import Column, Integer, Date, Numeric, MetaData, Table
from sqlalchemy.orm import declarative_base

metadata = MetaData()
Base = declarative_base(metadata=metadata)

class MarketInsights(Base):
    __tablename__ = "market_insights"
    __table_args__ = {'schema': 'webapp_schema'}
    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date, nullable=False, unique=True)
    latest_buffett_indicator = Column(Numeric(10, 2))
    latest_wilshire_value = Column(Numeric(20, 2))
    latest_gdp_value = Column(Numeric(20, 2))

class MarketTrends(Base):
    __tablename__ = "market_trends"
    __table_args__ = {'schema': 'webapp_schema'}
    trend_id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date, nullable=False, unique=True)
    buffett_indicator = Column(Numeric(10, 2))
    moving_average_6m = Column(Numeric(10, 2))
    moving_average_12m = Column(Numeric(10, 2))
    volatility_12m = Column(Numeric(10, 2))
