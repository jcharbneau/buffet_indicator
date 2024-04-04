from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from database import SessionLocal  # Adjust the import path as necessary
from models import MarketInsights, MarketTrends  # Adjust the import path as necessary
from schemas import MarketInsightSchema, MarketTrendSchema  # Adjust the import path as necessary
import math

app = FastAPI()

# CORS setup
origins = ["http://localhost:8000", "http://localhost:5174"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get the DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/v1/market_insights/", response_model=List[MarketInsightSchema])
def read_market_insights(db: Session = Depends(get_db)):
    try:
        insights = db.query(MarketInsights).all()

        cleaned_insights = []
        for insight in insights:
            cleaned_insight = {
                "id": insight.id,
                "date": insight.date,
                "buffett_indicator": None if math.isnan(insight.buffett_indicator) else insight.buffett_indicator,
                "wilshire_value": None if math.isnan(insight.wilshire_value) else insight.wilshire_value,
                "gdp_value": None if math.isnan(insight.gdp_value) else insight.gdp_value,
                "gdp_growth_rate": None if math.isnan(insight.gdp_growth_rate) else insight.gdp_growth_rate,
                "wilshire_growth_rate": None if math.isnan(insight.wilshire_growth_rate) else insight.wilshire_growth_rate,
            }
            cleaned_insights.append(MarketInsightSchema(**cleaned_insight))
        return cleaned_insights
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/v1/market_trends/", response_model=List[MarketTrendSchema])
async def read_market_trends(db: Session = Depends(get_db)):
    try:
        trends = db.query(MarketTrends).all()
        return trends
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
