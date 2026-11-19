from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, Float, DateTime
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from database import Base

# SQLAlchemy Database Models
class InquiryDB(Base):
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    company = Column(String(255), nullable=True)
    interest = Column(String(100), default="Quantum Cloud")
    message = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class NewsletterSubscriberDB(Base):
    __tablename__ = "newsletter_subscribers"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class QuantumSimulationDB(Base):
    __tablename__ = "quantum_simulations"

    id = Column(Integer, primary_key=True, index=True)
    qubits_count = Column(Integer, nullable=False)
    gate_depth = Column(Integer, nullable=False)
    algorithm = Column(String(100), nullable=False)
    fidelity_score = Column(Float, nullable=False)
    execution_time_ms = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

# Pydantic Schemas for API Requests & Responses
class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    company: Optional[str] = None
    interest: Optional[str] = "Quantum Infrastructure"
    message: Optional[str] = None

class InquiryResponse(BaseModel):
    id: int
    name: str
    email: str
    company: Optional[str]
    interest: Optional[str]
    message: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True

class NewsletterCreate(BaseModel):
    email: EmailStr

class SimulationCreate(BaseModel):
    qubits_count: int = Field(default=8, ge=2, le=128)
    gate_depth: int = Field(default=32, ge=4, le=1024)
    algorithm: str = Field(default="Shor Factorization")

class SimulationResponse(BaseModel):
    id: int
    qubits_count: int
    gate_depth: int
    algorithm: str
    fidelity_score: float
    execution_time_ms: float
    state_vector_preview: list[str]
    created_at: datetime

    class Config:
        from_attributes = True

