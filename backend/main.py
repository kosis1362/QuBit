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

# Ensure tables are created
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Qubit Quantum Systems API",
    description="Next-generation enterprise quantum infrastructure and consulting platform API",
    version="1.0.0"
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
            "id": "web-design",
            "category": "WEB & DIGITAL PRESENCE",
            "title": "Corporate Website Design",
            "description": "Crafting unique, responsive, user-friendly, and search-engine-optimized corporate websites tailored to distinct brand values and enterprise business requirements.",
            "metrics": "100% Mobile & SEO Optimized",
            "badge": "Core Web Service",
            "url": "https://deltatechnepal.com/services/web-design"
        },
        {
            "id": "ecommerce-solution",
            "category": "DIGITAL COMMERCE",
            "title": "E-commerce Solution",
            "description": "Developing custom online stores equipped with intuitive admin panels, secure payment gateways, dynamic product search, and 360° product previews across Shopify, WooCommerce, Magento, and custom stacks.",
            "metrics": "99.9% Transaction Reliability",
            "badge": "Enterprise Commerce",
            "url": "https://deltatechnepal.com/services/ecommerce-solution"
        },
        {
            "id": "web-application-development",
            "category": "ENTERPRISE WEB APPS",
            "title": "Web Application Development",
            "description": "Architecting scalable, cloud-native web applications tailored to streamline complex business operations, automate organizational workflows, and power high-throughput enterprise portals.",
            "metrics": "Sub-Second Response Latency",
            "badge": "Full-Stack Architecture",
            "url": "https://deltatechnepal.com/services/web-application-development"
        },
        {
            "id": "mobile-app-development",
            "category": "MOBILE ECOSYSTEMS",
            "title": "Mobile App Development",
            "description": "Building high-performance, secure native and cross-platform Android and iOS applications with seamless UI/UX, real-time sync, and rapid launch cycles.",
            "metrics": "4.9★ Store Rating Standards",
            "badge": "iOS & Android",
            "url": "https://deltatechnepal.com/services/mobile-app-development"
        },
        {
            "id": "software-development",
            "category": "CUSTOM SOFTWARE",
            "title": "Software Development",
            "description": "Tailored enterprise-grade software engineered through Agile sprints to optimize productivity, automate operational bottlenecks, and guarantee uncompromising data security.",
            "metrics": "Zero-Downtime Deployments",
            "badge": "Custom Engineering",
            "url": "https://deltatechnepal.com/services/software-development"
        },
        {
            "id": "search-engine-optimization",
            "category": "DIGITAL MARKETING & GROWTH",
            "title": "Search Engine Optimization (SEO)",
            "description": "Targeted data-driven SEO strategies improving organic search rankings across Google and Bing to drive high-intent qualified leads and maximize online brand authority.",
            "metrics": "300%+ Organic Traffic Uplift",
            "badge": "Growth & Rankings",
            "url": "https://deltatechnepal.com/services/search-engine-optimization"
        },
        {
            "id": "graphic-design",
            "category": "BRAND IDENTITY & CREATIVE",
            "title": "Graphics Designing",
            "description": "Creative visual design establishing a powerful brand identity through bespoke logos, marketing collateral, digital design assets, and engaging UI/UX design systems.",
            "metrics": "Vector-Perfect Pixel Quality",
            "badge": "Creative Studio",
            "url": "https://deltatechnepal.com/services/graphic-design"
        },
        {
            "id": "server-management",
            "category": "INFRASTRUCTURE & DEVOPS",
            "title": "Server Management",
            "description": "Continuous 24/7 server administration, Linux/Windows cluster optimization, automated security patches, real-time uptime monitoring, and proactive disaster recovery.",
            "metrics": "99.99% Uptime Guarantee",
            "badge": "Cloud & DevOps",
            "url": "https://deltatechnepal.com/services/server-management"
        },
        {
            "id": "2d-animation",
            "category": "MOTION & MULTIMEDIA",
            "title": "2D Animation",
            "description": "Dynamic 2D character animation, explainer videos, and motion graphics that transform complex technical concepts into captivating visual narratives for marketing and training.",
            "metrics": "60fps Broadcast Quality",
            "badge": "Motion Design",
            "url": "https://deltatechnepal.com/services/2d-animation"
        },
        {
            "id": "it-outsourcing",
            "category": "TALENT & DEDICATED TEAMS",
            "title": "IT Outsourcing",
            "description": "Cost-effective dedicated offshore engineering talent spanning frontend, backend, mobile, and QA to accelerate product roadmaps without overhead friction.",
            "metrics": "60% Overhead Reduction",
            "badge": "Global Talent",
            "url": "https://deltatechnepal.com/services/it-outsourcing"
        },
        {
            "id": "website-maintenance",
            "category": "MAINTENANCE & SECURITY",
            "title": "Website Maintenance",
            "description": "Proactive website monitoring, vulnerability patch deployment, speed optimization, regular database backups, and content updates ensuring 24/7 reliability.",
            "metrics": "Zero-Vulnerability Assurance",
            "badge": "Ongoing Support",
            "url": "https://deltatechnepal.com/services/website-maintenance"
        }
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

