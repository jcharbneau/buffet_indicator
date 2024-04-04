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
origins = ["http://localhost:8000", "http://localhost:5174", "https://yourfrontenddomain.com"]
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
                "latest_buffett_indicator": None if math.isnan(insight.latest_buffett_indicator) else insight.latest_buffett_indicator,
                "latest_wilshire_value": None if math.isnan(insight.latest_wilshire_value) else insight.latest_wilshire_value,
                "latest_gdp_value": None if math.isnan(insight.latest_gdp_value) else insight.latest_gdp_value,
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
