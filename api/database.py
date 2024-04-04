from databases import Database
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Load environment variables from .env file

# Database connection details
DATABASE = 'postgres'
USER = 'pipeline_user'
PASSWORD = 'pipeline_password'
HOST = 'bipostgres'
PORT = '5432'
DATABASE_URL = f"postgresql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}"

# Database connection settings
# DATABASE_URL = os.getenv("DATABASE_URL")  # Example: "postgresql://user:password@localhost/dbname"

# SQLAlchemy setup for synchronous operations (like migrations)
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Metadata instance for schema generation
metadata = MetaData()

# Base class for declarative models
Base = declarative_base(metadata=metadata)

# databases package setup for async operations
database = Database(DATABASE_URL)
