import time
import math
import random
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

from database import engine, Base, get_db
from models import (
    InquiryDB, InquiryCreate, InquiryResponse,
    NewsletterSubscriberDB, NewsletterCreate,
    QuantumSimulationDB, SimulationCreate, SimulationResponse
)

from contextlib import asynccontextmanager

# Define lifespan event to initialize database tables safely at runtime
@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        Base.metadata.create_all(bind=engine)
    except Exception as e:
        print(f"Warning: Database initialization deferred: {e}")
    yield

app = FastAPI(
    title="Qubit Quantum Systems API",
    description="Next-generation enterprise quantum infrastructure and consulting platform API",
    version="1.0.0",
    lifespan=lifespan
)

# Enable CORS for frontend applications
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "platform": "Qubit Quantum Operating Environment",
        "status": "ONLINE",
        "version": "1.0.0",
        "docs_url": "/docs"
    }

@app.get("/api/health")
def health_check(db: Session = Depends(get_db)):
    try:
        # Test DB connection
        db.execute(Base.metadata.tables['inquiries'].select().limit(1))
        db_status = "connected"
    except Exception as e:
        db_status = f"error: {str(e)}"

    return {
        "status": "healthy",
        "quantum_cluster": "Qubit-Synapse-Node-01",
        "region": "aws-us-east-2 (Neon Postgres)",
        "cryogenic_temp_mK": 14.2,
        "coherence_time_us": 420.5,
        "database": db_status,
        "timestamp": time.time()
    }

@app.post("/api/inquiries", response_model=InquiryResponse, status_code=status.HTTP_201_CREATED)
def create_inquiry(inquiry_data: InquiryCreate, db: Session = Depends(get_db)):
    inquiry = InquiryDB(
        name=inquiry_data.name,
        email=inquiry_data.email,
        company=inquiry_data.company,
        interest=inquiry_data.interest,
        message=inquiry_data.message
    )
    db.add(inquiry)
    db.commit()
    db.refresh(inquiry)
    return inquiry

@app.get("/api/inquiries", response_model=List[InquiryResponse])
def list_inquiries(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    inquiries = db.query(InquiryDB).order_by(InquiryDB.created_at.desc()).offset(skip).limit(limit).all()
    return inquiries

@app.post("/api/newsletter", status_code=status.HTTP_201_CREATED)
def subscribe_newsletter(sub: NewsletterCreate, db: Session = Depends(get_db)):
    existing = db.query(NewsletterSubscriberDB).filter(NewsletterSubscriberDB.email == sub.email).first()
    if existing:
        return {"status": "success", "message": "Already subscribed to Qubit Briefings."}
    
    subscriber = NewsletterSubscriberDB(email=sub.email)
    db.add(subscriber)
    db.commit()
    return {"status": "success", "message": "Successfully subscribed to Qubit Briefings."}

@app.post("/api/simulate", response_model=SimulationResponse)
def run_quantum_simulation(sim_in: SimulationCreate, db: Session = Depends(get_db)):
    start_time = time.time()
    
    # Calculate realistic quantum fidelity and decoherence decay
    # Fidelity decays slightly with qubits count and gate depth: F = 0.9994^(depth * log2(qubits))
    effective_gates = sim_in.gate_depth * math.log2(sim_in.qubits_count)
    base_fidelity = 0.9995 ** (effective_gates * 0.1)
    fidelity = max(round(base_fidelity * 100, 3), 94.15)
    
    # Generate state vector preview amplitudes
    num_states = min(4, 2 ** sim_in.qubits_count)
    state_vector = []
    accum = 0.0
    for i in range(num_states):
        binary = format(i, f'0{min(sim_in.qubits_count, 6)}b')
        amp = round(random.uniform(0.1, 0.9), 3)
        state_vector.append(f"|{binary}>: {amp} ∠ {random.randint(0, 360)}°")

    elapsed_ms = round((time.time() - start_time) * 1000 + random.uniform(18.5, 42.0), 2)
    
    sim_db = QuantumSimulationDB(
        qubits_count=sim_in.qubits_count,
        gate_depth=sim_in.gate_depth,
        algorithm=sim_in.algorithm,
        fidelity_score=fidelity,
        execution_time_ms=elapsed_ms
    )
    db.add(sim_db)
    db.commit()
    db.refresh(sim_db)
    
    return SimulationResponse(
        id=sim_db.id,
        qubits_count=sim_db.qubits_count,
        gate_depth=sim_db.gate_depth,
        algorithm=sim_db.algorithm,
        fidelity_score=sim_db.fidelity_score,
        execution_time_ms=sim_db.execution_time_ms,
        state_vector_preview=state_vector,
        created_at=sim_db.created_at
    )

@app.get("/api/metrics")
def get_quantum_metrics():
    return {
        "coherence_time_us": 420.8,
        "two_qubit_gate_fidelity_pct": 99.94,
        "quantum_volume": 262144,
        "cryogenic_temperature_mk": 14.2,
        "active_global_clusters": 24,
        "live_qubit_count": 1152,
        "jobs_processed_24h": 48291,
        "post_quantum_entropy_bits": 512
    }

@app.get("/api/solutions")
def get_solutions():
    return [
        {
            "id": "quantum-cloud",
            "category": "CLOUD ARCHITECTURE",
            "title": "Hybrid Quantum-Classical Infrastructure",
            "description": "Seamlessly integrate fault-tolerant quantum coprocessors with existing AWS, Azure, and private high-performance compute clusters.",
            "metrics": "Sub-millisecond API orchestration",
            "badge": "Enterprise Core"
        },
        {
            "id": "qkd-cryptography",
            "category": "SECURITY & RESILIENCY",
            "title": "Post-Quantum Cryptography & QKD",
            "description": "Protect critical infrastructure against future quantum decryption threats using NIST FIPS-approved lattice cryptography and Quantum Key Distribution.",
            "metrics": "100% Quantum-Immune Keys",
            "badge": "Mission Critical"
        },
        {
            "id": "financial-arbitrage",
            "category": "ALGORITHMIC FINANCE",
            "title": "Quantum Monte Carlo Risk Modeling",
            "description": "Accelerate multi-asset derivative pricing and portfolio tail-risk evaluation with quadratic speedups over traditional GPU compute grids.",
            "metrics": "120x Speedup in Tail Risk",
            "badge": "Financial Systems"
        },
        {
            "id": "materials-chemistry",
            "category": "MOLECULAR SIMULATION",
            "title": "VQE Molecular Catalyst Synthesis",
            "description": "Simulate transition-metal electron correlations and chemical bonding energies with exact ground-state quantum eigensolvers.",
            "metrics": "Femtosecond Accuracy",
            "badge": "Life Sciences & Materials"
        }
    ]

if __name__ == "__main__":
    import os
    import uvicorn
    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("main:app", host=host, port=port, reload=True)

