import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Database,
  ShieldCheck,
  Smartphone,
  Cpu,
  Building2,
  CalendarCheck,
  Users,
  FileText,
  FileSpreadsheet,
  FileCode,
  Clock,
  Sparkles,
  ChevronDown,
  Check,
  Server,
  Lock,
  Download,
  AlertCircle,
  ExternalLink,
  GitBranch,
  Terminal,
  Activity,
  Workflow
} from 'lucide-react';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ConnectWithUsSection from '../components/ConnectWithUsSection';
import Footer from '../components/Footer';

// Vector Brand Icons for Tech Badges
function TechIcon({ type }) {
  switch (type) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'spring':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M20.5 3.5s-7 .5-11.5 5S3.5 19 3.5 19s6-1 10.5-5.5S20.5 3.5 20.5 3.5z" />
          <path d="M5 17.5c2.5-2.5 6-4 10-5" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c0 .8-.7 1.5-1.5 1.5S10 17.3 10 16.5V11h3v5.5zm4.5-5.5H16V9c0-1.7-1.3-3-3-3s-3 1.3-3 3v2H8.5c-.8 0-1.5-.7-1.5-1.5S7.7 8 8.5 8H10V6.5C10 4.6 11.6 3 13.5 3S17 4.6 17 6.5V8h.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
        </svg>
      );
    case 'expo':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M4 19L12 5l8 14H4z" />
        </svg>
      );
    case 'typescript':
      return <span className="font-mono font-black text-[10px] leading-none px-0.5 border border-white/60 rounded-xs">TS</span>;
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M13 2L3 14h7l-2 8 10-12h-7l2-8z" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M22 13c-.5-2-2-3-3.5-3-.3 0-.5 0-.8.1-.5-1.3-1.8-2.1-3.2-2.1H14V5H9v3H5v5c0 4 3 6 8 6 5.5 0 8.5-3 9-6zm-11-2H9V9h2v2zm3 0h-2V9h2v2zm3 0h-2V9h2v2z" />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <polygon points="12 3 22 20 2 20" />
        </svg>
      );
    case 'render':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <circle cx="7" cy="12" r="3.5" />
          <circle cx="17" cy="7" r="3" />
          <circle cx="17" cy="17" r="3" />
        </svg>
      );
    case 'jwt':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case 'neon':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="9" r="3" />
          <path d="M6 9v6M9 6h4a5 5 0 0 1 5 3" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.5 5.5H8.7l.2 2h8.3l-.6 6-4.6 1.3-4.6-1.3-.3-3.5h2l.2 1.8 2.7.7 2.7-.7.3-3H6.5L5.7 5.5h12.1l-.3 2z" />
        </svg>
      );
    case 'swagger':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        </svg>
      );
    case 'aws':
      return <span className="font-black font-sans text-[10px] tracking-tight">AWS</span>;
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M11.9 2c-3.1 0-5.1 1.4-5.1 3.5v2.6h5.2V9H4.6C2.5 9 1 10.9 1 13.5s1.4 4.5 3.5 4.5h1.6v-2.3c0-2.3 2-4.1 4.2-4.1h7.3c1.7 0 3-1.4 3-3V5.5C20.6 3.4 18.7 2 15.6 2h-3.7z" />
        </svg>
      );
    case 'mysql':
      return <span className="font-mono font-bold text-[9px] tracking-tight">SQL</span>;
    case 'redis':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <polygon points="12 2 22 8 12 14 2 8" />
          <polygon points="2 12 12 18 22 12" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M12 2C11 3.5 6 9.5 6 14.5c0 3.3 2.7 6 6 6s6-2.7 6-6C18 9.5 13 3.5 12 2zm0 17c-.5 0-1-.2-1.4-.5V5.5c.5.8 1.4 2.5 1.4 4.5v9z" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M4 17l4-15 4 8-8 7zm16 0l-4-15-4 8 8 7zm-8 4l7-4-3-12-8 12 4 4z" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <circle cx="15" cy="6" r="3" />
          <circle cx="9" cy="6" r="3" />
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
          <circle cx="9" cy="18" r="3" />
        </svg>
      );
    case 'canva':
      return <span className="font-black text-[10px] tracking-tight font-sans">C</span>;
    case 'netlify':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <polygon points="12 2 22 12 12 22 2 12" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      );
    case 'next':
      return <span className="font-bold text-[10px] tracking-tight font-mono">N</span>;
    case 'code':
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

export default function ProjectDetailPage({ onConsultClick }) {
  const { projectId } = useParams();
  const [activeStackTab, setActiveStackTab] = useState('all'); // 'all' | 'frontend' | 'backend' | 'database' | 'cloud'
  const [openModules, setOpenModules] = useState({}); // Track each module independently

  const toggleModule = (idx) => {
    setOpenModules(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // High-level 7-Step Request and Data Flow (from Page 8 of Document)
  const dataFlowSteps = [
    {
      step: '01',
      title: 'User Interaction',
      layer: 'Presentation Layer',
      tech: 'React Native & Expo Router',
      desc: 'User interacts with role-specific screens on Web, Android, or iOS.'
    },
    {
      step: '02',
      title: 'API Request Dispatch',
      layer: 'Client Networking',
      tech: 'Shared Axios Client',
      desc: 'Frontend calls configured REST endpoints with standardized request payloads.'
    },
    {
      step: '03',
      title: 'Session Token Injection',
      layer: 'Client Interceptor',
      tech: 'AsyncStorage & JJWT',
      desc: 'Axios request interceptor attaches the JWT token as an HTTP Bearer header.'
    },
    {
      step: '04',
      title: 'Security Verification',
      layer: 'Security Perimeter',
      tech: 'Spring Security 6',
      desc: 'Validates JWT signature, claims, and enforces Role-Based Access Controls (RBAC).'
    },
    {
      step: '05',
      title: 'Business Processing',
      layer: 'Application Layer',
      tech: 'Spring MVC Controllers',
      desc: 'Dispatches to specialized Spring services for attendance, leaves, and payroll.'
    },
    {
      step: '06',
      title: 'Data Persistence',
      layer: 'Data Layer',
      tech: 'Hibernate & Neon PostgreSQL',
      desc: 'Spring Data JPA executes parameterized queries against Neon Serverless PostgreSQL with SSL.'
    },
    {
      step: '07',
      title: 'Response / PDF Render',
      layer: 'Response Delivery',
      tech: 'OpenHTMLToPDF / JSON',
      desc: 'Returns JSON payload or streams compiled binary PDF payslips to the client.'
    }
  ];

  // 8 User Roles & Segregated Permissions (from Page 4 of Document)
  const userRoles = [
    {
      role: 'Employees',
      authority: 'ROLE_EMPLOYEE',
      scope: 'Self-service attendance check-in/out, leave applications, profile dossiers & downloadable salary slips.',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      role: 'HR Managers',
      authority: 'ROLE_HR',
      scope: 'Employee administration, attendance review, leave approval pipeline, salary structures & outlet mapping.',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      role: 'Administrators',
      authority: 'ROLE_ADMIN',
      scope: 'Salary structure reviews and approvals, employee performance oversight & operational analytics.',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      role: 'Super Admins',
      authority: 'ROLE_SUPER_ADMIN',
      scope: 'Global system governance, tenant configuration, role allocation & support-ticket administration.',
      color: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      role: 'Outlet Managers',
      authority: 'ROLE_MANAGER',
      scope: 'Store-level attendance, branch shift schedules, inventory movements & local stock monitoring.',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      role: 'Outlet Users',
      authority: 'ROLE_OUTLET',
      scope: 'Category and product browsing, internal branch requisition cart & inventory order placement.',
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    {
      role: 'Accountants',
      authority: 'ROLE_ACCOUNTANT',
      scope: 'Payroll calculation records, salary deductions, tax calculations & fiscal audit logging.',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      role: 'Super Accountants',
      authority: 'ROLE_SUPER_ACCOUNTANT',
      scope: 'Multi-outlet consolidated balance sheets, tax compliance & master compensation authorization.',
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  // Core Functional Modules (from Pages 3-4 of Document)
  const functionalModules = [
    {
      id: '01',
      title: 'Employee Dossiers & Lifecycle Management',
      summary: 'Centralizes the entire employee lifecycle from onboarding to offboarding.',
      points: [
        'Employee ID, designation, department, joining date & outlet mapping',
        'Personal details: DOB, gender, nationality & marital status',
        'Government identity compliance: Aadhaar & PAN verification',
        'Banking information: Account holder, IFSC, bank name & PF number'
      ]
    },
    {
      id: '02',
      title: 'Geofenced & Manual Attendance Engine',
      summary: 'Automates clock-ins with daily summaries and duration tracking.',
      points: [
        'Mobile & web check-in/check-out with timestamp capture',
        'Daily workforce summaries: Present, Absent, Late & On-Leave counts',
        'HR/Admin manual adjustment & attendance correction requests',
        'Personal attendance calendar history and exportable logs'
      ]
    },
    {
      id: '03',
      title: 'Leave Management & Multi-Tier Approval Chain',
      summary: 'Replaces unstructured chat messages with structured approval pipelines.',
      points: [
        'Leave applications categorized by type, date span & business rationale',
        'Employee self-service leave balance tracking and status dashboard',
        'Manager review queues with 1-click Approve, Reject & Remark functions',
        'Automated synchronization with monthly attendance telemetry'
      ]
    },
    {
      id: '04',
      title: '3-State Compensation & Salary Workflow',
      summary: 'Rigorous approval pipeline preventing calculation discrepancies.',
      points: [
        'Captures basic pay, HRA, medical, travel, shift allowances & variable pay',
        'Calculates annual CTC, gross fixed pay, PF & professional tax deductions',
        '3-tier governance lifecycle: HR Creates → PENDING → Admin Approves/Rejects',
        'Immutable audit logs tracking approval identity and timestamp'
      ]
    },
    {
      id: '05',
      title: 'Automated Payroll & Binary PDF Payslip Generation',
      summary: 'Synthesizes verified attendance with salary rules into official payslips.',
      points: [
        'Monthly payroll generation cross-referencing approved salary structures',
        'Individual employee payroll record retrieval and historical archive',
        'Server-side binary PDF generation via OpenHTMLToPDF and PDFBox',
        'Secure 1-click payslip download for mobile and web users'
      ]
    },
    {
      id: '06',
      title: 'Encrypted Employee Document Vault',
      summary: 'Secure indexing of sensitive identity and compliance documents.',
      points: [
        'Metadata indexing for Aadhaar, PAN, passport, driving license & degrees',
        'Employee and HR upload interfaces with document-number validation',
        'Presigned view/download URL generation with security expiry',
        'Role-based access ensuring strictly partitioned document privacy'
      ]
    }
  ];

  // Technical Stack Badges (Matching Brand Shield Badges Layout)
  const techStackBadges = [
    // Frontend Stack
    { name: 'REACT NATIVE', category: 'frontend', bg: '#20232A', textColor: '#61DAFB', icon: 'react' },
    { name: 'REACT', category: 'frontend', bg: '#20232A', textColor: '#61DAFB', icon: 'react' },
    { name: 'EXPO', category: 'frontend', bg: '#000000', textColor: '#FFFFFF', icon: 'expo' },
    { name: 'TYPESCRIPT', category: 'frontend', bg: '#3178C6', textColor: '#FFFFFF', icon: 'typescript' },
    { name: 'VITE', category: 'frontend', bg: '#646CFF', textColor: '#FFFFFF', icon: 'vite' },
    { name: 'HTML5', category: 'frontend', bg: '#E34F26', textColor: '#FFFFFF', icon: 'html5' },
    { name: 'AXIOS', category: 'frontend', bg: '#5A29E4', textColor: '#FFFFFF', icon: 'code' },
    { name: 'REANIMATED', category: 'frontend', bg: '#8B5CF6', textColor: '#FFFFFF', icon: 'code' },
    { name: 'NEXT', category: 'frontend', bg: '#000000', textColor: '#FFFFFF', icon: 'next' },

    // Backend Stack
    { name: 'SPRING BOOT', category: 'backend', bg: '#6DB33F', textColor: '#FFFFFF', icon: 'spring' },
    { name: 'JAVA', category: 'backend', bg: '#E76F00', textColor: '#FFFFFF', icon: 'java' },
    { name: 'SPRING SECURITY', category: 'backend', bg: '#6DB33F', textColor: '#FFFFFF', icon: 'spring' },
    { name: 'JWT', category: 'backend', bg: '#000000', textColor: '#FFFFFF', icon: 'jwt' },
    { name: 'HIBERNATE', category: 'backend', bg: '#59666C', textColor: '#FFFFFF', icon: 'postgres' },
    { name: 'SWAGGER', category: 'backend', bg: '#85EA2D', textColor: '#000000', icon: 'swagger' },
    { name: 'FASTAPI', category: 'backend', bg: '#009688', textColor: '#FFFFFF', icon: 'code' },
    { name: 'EXPRESS.JS', category: 'backend', bg: '#334155', textColor: '#FFFFFF', icon: 'code' },
    { name: 'MAVEN', category: 'backend', bg: '#C71A36', textColor: '#FFFFFF', icon: 'code' },
    { name: 'PYTHON', category: 'backend', bg: '#3776AB', textColor: '#FFFFFF', icon: 'python' },
    { name: 'C++', category: 'backend', bg: '#00599C', textColor: '#FFFFFF', icon: 'code' },

    // Database & Persistence
    { name: 'POSTGRES', category: 'database', bg: '#336791', textColor: '#FFFFFF', icon: 'postgres' },
    { name: 'NEON', category: 'database', bg: '#00E599', textColor: '#000000', icon: 'neon' },
    { name: 'MYSQL', category: 'database', bg: '#4479A1', textColor: '#FFFFFF', icon: 'mysql' },
    { name: 'REDIS', category: 'database', bg: '#DC382D', textColor: '#FFFFFF', icon: 'redis' },
    { name: 'MONGODB', category: 'database', bg: '#47A248', textColor: '#FFFFFF', icon: 'mongodb' },
    { name: 'FIREBASE', category: 'database', bg: '#FFA611', textColor: '#FFFFFF', icon: 'firebase' },

    // Cloud & DevOps
    { name: 'RENDER', category: 'cloud', bg: '#46E3B7', textColor: '#000000', icon: 'render' },
    { name: 'VERCEL', category: 'cloud', bg: '#000000', textColor: '#FFFFFF', icon: 'vercel' },
    { name: 'DOCKER', category: 'cloud', bg: '#2496ED', textColor: '#FFFFFF', icon: 'docker' },
    { name: 'AWS', category: 'cloud', bg: '#FF9900', textColor: '#FFFFFF', icon: 'aws' },
    { name: 'NETLIFY', category: 'cloud', bg: '#00C7B7', textColor: '#FFFFFF', icon: 'netlify' },
    { name: 'GIT', category: 'cloud', bg: '#F05032', textColor: '#FFFFFF', icon: 'git' },
    { name: 'GITHUB', category: 'cloud', bg: '#181717', textColor: '#FFFFFF', icon: 'github' },
    { name: 'FIGMA', category: 'cloud', bg: '#F24E1E', textColor: '#FFFFFF', icon: 'figma' },
    { name: 'CANVA', category: 'cloud', bg: '#00C4CC', textColor: '#FFFFFF', icon: 'canva' }
  ];

  const filteredStack = techStackBadges.filter(
    (b) => activeStackTab === 'all' || b.category === activeStackTab
  );

  // 5-Phase Implementation Roadmap (from Page 12-13 of Document)
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Security & Deployment Baseline',
      deliverable: 'CORS lock-down, secret manager integration, JWT rotation, and TLS encryption.'
    },
    {
      phase: 'Phase 2',
      title: 'Core HR & Employee Operations',
      deliverable: 'End-to-end employee onboarding, geofenced attendance logs & leave approval workflows.'
    },
    {
      phase: 'Phase 3',
      title: 'Payroll & Compensation Engine',
      deliverable: 'Dynamic salary formulas, 3-state salary authorization, and automated PDF payslip generation.'
    },
    {
      phase: 'Phase 4',
      title: 'ERP Extensions & Multi-Store',
      deliverable: 'Multi-outlet inventory synchronization, store requisitions, and support-ticket routing.'
    },
    {
      phase: 'Phase 5',
      title: 'Operational Readiness & Scale',
      deliverable: 'Automated test suites, Flyway database migrations, CI/CD pipelines & compliance audit trails.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#121212] flex flex-col font-sans selection:bg-[#FF462D] selection:text-white">

      {/* 
        ========================================================================
        1. HERO BANNER: Full-Screen Coverage with Deep Corner Blackness
        ========================================================================
      */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0C0D] text-white flex flex-col justify-between border-b border-black/[0.08] pt-28 sm:pt-32 lg:pt-36">

        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hr1.jpg"
            alt="ERP / Employee Management System"
            className="w-full h-full object-cover object-center transform scale-105"
          />

          {/* Deep Corner Blackness for 100% Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/85 via-50% to-black/35 z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] z-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF462D]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

            {/* Hero Content - Placed at the Down Side of Image, Starting from Screen Left */}
            <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-end pb-8 sm:pb-12 lg:pb-14 pt-20">
              <div className="max-w-4xl text-left">
                {/* Breadcrumb */}
                  <nav aria-label="Breadcrumb" className="text-xs sm:text-[13px] text-white/70 mb-4 font-normal flex items-center gap-2 flex-wrap">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/40">/</span>
                    <Link to="/#our-projects" className="hover:text-white transition-colors">Projects</Link>
                    <span className="text-white/40">/</span>
                    <span className="text-white font-medium">ERP / Employee Management System</span>
                  </nav>

                  {/* Category Eyebrow with Red Line */}
                    <div className="mb-3">
                      <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#FF462D] font-semibold block">

                      </span>
                      <div className="w-6 h-[2px] bg-[#FF462D] mt-1.5" />
                    </div>

                    {/* Main Headline */}
                      <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-white mb-4 leading-[1.12]">
                        ERP / Employee Management System
                      </h1>

                      {/* Sub-heading */}
                        <p className="text-base sm:text-lg lg:text-[19px] text-white/90 font-light leading-relaxed mb-7 max-w-3xl">
                          Cross-platform ERP and Human Resource Management application unifying employee records, attendance telemetry, leave approvals, salary workflows, and PDF payslips across Web, Android, and iOS.
                        </p>

                          {/* Action CTAs: Button 1: Visit Website, Button 2: Consult Lead */}
                          <div className="flex flex-wrap items-center gap-4 mb-2">
                            <a
                              href="https://employee-management-system-rose-tau.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#FF462D] text-white text-sm font-semibold tracking-wide hover:bg-[#E0351E] transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 group/btn"
                            >
                              <span>Visit Website</span>
                              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>

                            <button
                              type="button"
                              onClick={onConsultClick}
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-all backdrop-blur-sm cursor-pointer active:scale-95 group/consult"
                            >
                              <span>Consult Lead</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover/consult:translate-x-0.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Bottom 3-Column Highlight Strip */}
                      <div className="relative z-20 w-full border-t border-white/20 bg-black/55 backdrop-blur-md">
                          <div className="w-full px-6 sm:px-10 lg:px-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                              <div className="py-4 sm:py-5 md:px-6 first:pl-0 flex items-center gap-3 text-sm text-white/90">
                                <Smartphone className="w-5 h-5 text-[#FF462D] shrink-0" />
                                <span>Cross-Platform: Web, Android & iOS (React Native)</span>
                              </div>
                              <div className="py-4 sm:py-5 md:px-6 flex items-center gap-3 text-sm text-white/90">
                                <Server className="w-5 h-5 text-[#FF462D] shrink-0" />
                                <span>Backend: Java 17 & Spring Boot 3.2.4 REST APIs</span>
                              </div>
                              <div className="py-4 sm:py-5 md:px-6 last:pr-0 flex items-center gap-3 text-sm text-white/90">
                                <Database className="w-5 h-5 text-[#FF462D] shrink-0" />
                                <span>Persistence: PostgreSQL Hosted on Neon Serverless</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* 
        ========================================================================
        2. PROJECT AT A GLANCE & EXECUTIVE VALUE PROPOSITION
        ========================================================================
      */}
                      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
                        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Column: Context & Business Problem */}
                            <div className="lg:col-span-6">
                              <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
                                1. PROJECT AT A GLANCE
                              </span>
                              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] mb-6">
                                Bridging the Gap Between Employee Workflows & Enterprise Governance
                              </h2>

                              <p className="text-base text-[#444444] leading-relaxed mb-5">
                                In many growing organisations, employee information and routine HR activities are scattered across spreadsheets, paper forms, chat messages, and disconnected tools. This creates record inconsistencies, attendance disputes, delayed leave handling, and payroll exposure.
                              </p>

                              <p className="text-base text-[#444444] leading-relaxed mb-8">
                                The <span className="font-semibold text-[#121212]">ERP / Employee Management System</span> solves this through a client-server architecture: a cross-platform React Native frontend communicates with a secure Java Spring Boot REST API, persisting data to an auto-scaling Neon PostgreSQL database.
                              </p>

                              {/* Key Value Checklist */}
                              <div className="space-y-3">
                                {[
                                  'Consolidated employee records & digital identity dossiers',
                                  'Real-time check-in/out and multi-outlet attendance telemetry',
                                  'Structured multi-tier leave authorization workflows',
                                  '3-state salary compensation approval engine (Pending → Approved)',
                                  'Standardized payroll synthesis and binary PDF payslips'
                                ].map((item, idx) => (
                                  <div key={idx} className="flex items-center gap-3 text-sm text-[#222222] font-medium">
                                    <div className="w-5 h-5 rounded-full bg-red-50 text-[#FF462D] flex items-center justify-center shrink-0">
                                      <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right Column: Technical Specification Dossier Card */}
                            <div className="lg:col-span-6 bg-[#FAF7F2] rounded-3xl p-7 sm:p-9 border border-black/[0.08] shadow-sm">
                              <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-6">
                                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF462D]">
                  // CLIENT DISCUSSION DOSSIER
                                </span>
                                <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-black/10 font-mono text-[#555555]">
                                  Nov 22, 2026
                                </span>
                              </div>

                              {/* Spec Rows */}
                              <div className="space-y-4">
                                {[
                                  { label: 'Project Category', val: 'Cross-platform ERP & HR Management Application' },
                                  { label: 'Target Platforms', val: 'Web, Android, and iOS' },
                                  { label: 'Frontend Technology', val: 'React Native 0.81.5, Expo ~54 & TypeScript ~5.9' },
                                  { label: 'Backend Architecture', val: 'Java 17 & Spring Boot 3.2.4 REST API' },
                                  { label: 'Security & Auth', val: 'Stateless JJWT Bearer Tokens + Spring Security RBAC' },
                                  { label: 'Database Cloud', val: 'PostgreSQL Hosted on Neon Serverless (SSL)' },
                                  { label: 'Deployment Targets', val: 'Vercel (Web), Render (API), EAS Build (Mobile)' }
                                ].map((spec, sIdx) => (
                                  <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-black/[0.05] gap-1">
                                    <span className="text-xs font-mono uppercase text-[#777777] font-medium">
                                      {spec.label}
                                    </span>
                                    <span className="text-sm font-semibold text-[#121212] sm:text-right">
                                      {spec.val}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>

                        </div>
                      </section>

                      {/* 
        ========================================================================
        3. DIRECTED GRAPH: 7-Step High-Level Request & Data Flow
        ========================================================================
      */}
                      <section id="system-architecture" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-black/[0.06]">
                        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                          <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-xs font-mono uppercase font-semibold tracking-[0.22em] text-[#FF462D] block mb-2">
                              HOW THE SYSTEM WORKS // END-TO-END DATA FLOW
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#121212] mb-4">
                              High-Level Request and Data Flow
                            </h2>
                            <div className="w-12 h-1 bg-[#FF462D] mx-auto mb-5 rounded-full" />
                            <p className="text-base text-[#555555]">
                              Tracing the lifecycle of an authenticated request from user touchpoint to Neon PostgreSQL and back.
                            </p>
                          </div>

                          {/* 7-Step Directed Horizontal/Vertical Connected Card Pipeline */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
                            {dataFlowSteps.map((step, idx) => (
                              <div
                                key={step.step}
                                className="group bg-white rounded-2xl p-5 border border-black/[0.08] hover:border-[#FF462D]/60 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col justify-between relative cursor-default"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono font-bold text-[#FF462D] bg-red-50 px-2 py-0.5 rounded transition-transform duration-300 group-hover:scale-105">
                                      STEP {step.step}
                                    </span>
                                    {idx < dataFlowSteps.length - 1 && (
                                      <span className="hidden lg:block text-[#FF462D] font-bold text-xs transition-transform duration-300 group-hover:translate-x-1">➔</span>
                                    )}
                                  </div>

                                  <span className="text-[10px] font-mono uppercase text-[#888888] block mb-1">
                                    {step.layer}
                                  </span>

                                  <h3 className="text-sm font-bold text-[#121212] mb-1.5 leading-snug group-hover:text-[#FF462D] transition-colors">
                                    {step.title}
                                  </h3>

                                  <p className="text-xs text-[#666666] leading-relaxed">
                                    {step.desc}
                                  </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-black/[0.06]">
                                  <span className="text-[10px] font-mono font-semibold text-[#121212] block truncate">
                                    {step.tech}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </section>

                      {/* 
        ========================================================================
        4. ROLE-BASED ACCESS CONTROL (RBAC) MATRIX
        ========================================================================
      */}
                      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
                        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                          <div className="max-w-3xl mb-14">
                            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
                              4. USER ROLES & ACCESS CONTROL
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] mb-4">
                              8 Segregated Roles for Complete Enterprise Governance
                            </h2>
                            <p className="text-base text-[#555555]">
                              The frontend uses Expo Router route groups for role segregation, while Spring Security validates authorities on every API endpoint.
                            </p>
                          </div>

                          {/* 8 Roles Responsive Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {userRoles.map((r, rIdx) => (
                              <div
                                key={rIdx}
                                className="p-6 rounded-2xl bg-[#FAFAF8] border border-black/[0.08] hover:border-[#FF462D]/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col justify-between group cursor-default"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold text-[#121212] transition-colors group-hover:text-[#FF462D]">
                                      0{rIdx + 1}
                                    </span>
                                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border transition-transform duration-300 group-hover:scale-105 ${r.color}`}>
                                      {r.authority}
                                    </span>
                                  </div>

                                  <h3 className="text-lg font-bold text-[#121212] mb-2 group-hover:text-[#FF462D] transition-colors">
                                    {r.role}
                                  </h3>

                                  <p className="text-xs text-[#555555] leading-relaxed">
                                    {r.scope}
                                  </p>
                                </div>

                                <div className="mt-5 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                                  <span>ROLE SEGREGATION</span>
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF462D] transition-transform duration-300 group-hover:scale-125" />
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </section>

                      {/* 
        ========================================================================
        5. FUNCTIONAL MODULES: Interactive Accordion Cards
        ========================================================================
      */}
                      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-black/[0.06]">
                        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                          <div className="max-w-3xl mb-14">
                            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
                              3. FEATURES & FUNCTIONAL MODULES
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] mb-4">
                              Comprehensive Modules Engineered for Scale
                            </h2>
                            <p className="text-base text-[#555555]">
                              Click any module to inspect its core functional requirements and system capabilities.
                            </p>
                          </div>

                          {/* 6 Functional Modules Grid with Animated Dropdowns */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                            {functionalModules.map((mod, idx) => {
                              const isOpen = Boolean(openModules[idx]);

                              return (
                                <div
                                  key={mod.id}
                                  onClick={() => toggleModule(idx)}
                                  className={`group rounded-2xl p-7 border transform transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl ${isOpen
                                      ? 'bg-white border-[#FF462D]/60 shadow-lg ring-2 ring-[#FF462D]/15'
                                      : 'bg-white/80 border-black/[0.08] hover:border-[#FF462D]/40 hover:bg-white'
                                    }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-4">
                                      <span className="text-2xl font-mono font-bold text-[#FF462D] transition-transform duration-300 group-hover:scale-110">
                                        {mod.id}
                                      </span>
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FF462D] text-white rotate-6' : 'bg-red-50 text-[#FF462D] group-hover:bg-[#FF462D] group-hover:text-white'
                                        }`}>
                                        <Workflow className="w-4 h-4" />
                                      </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#121212] mb-2 group-hover:text-[#FF462D] transition-colors leading-snug">
                                      {mod.title}
                                    </h3>

                                    <p className="text-xs text-[#666666] leading-relaxed mb-4">
                                      {mod.summary}
                                    </p>

                                    {/* Animated Dropdown Capability List */}
                                    <div
                                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-3 border-t border-black/[0.06]' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                      <div className="overflow-hidden">
                                        <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7F2] border border-black/[0.04]">
                                          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#FF462D] block mb-2.5">
                                            CORE CAPABILITIES & SPECS:
                                          </span>
                                          <ul className="space-y-2.5">
                                            {mod.points.map((pt, pIdx) => (
                                              <li key={pIdx} className="text-xs sm:text-[13px] text-[#222222] font-medium flex items-start gap-2.5 leading-relaxed">
                                                <span className="w-4 h-4 rounded-full bg-red-50 text-[#FF462D] flex items-center justify-center shrink-0 mt-0.5 border border-red-200/60">
                                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                                </span>
                                                <span>{pt}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#888888]">
                                    <span>{isOpen ? 'COLLAPSE' : 'EXPAND MODULE'}</span>
                                    <ChevronDown className={`w-4 h-4 text-[#FF462D] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                        </div>
                      </section>

                      {/* 
        ========================================================================
        6. FULL TECHNOLOGY STACK SPECIFICATION: SHIELDS / BADGES FORMAT
        ========================================================================
      */}
                      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
                        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                            <div>
                              <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
                                5. TECHNOLOGY STACK
                              </span>
                              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212]">
                                Architectural Frameworks & Dependencies
                              </h2>
                            </div>

                            {/* Stack Switcher Tabs */}
                            <div className="inline-flex p-1.5 rounded-2xl bg-[#EBE7DF] border border-black/[0.06] gap-1 self-start md:self-auto flex-wrap">
                              <button
                                type="button"
                                onClick={() => setActiveStackTab('all')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeStackTab === 'all' ? 'bg-white text-[#121212] shadow-sm' : 'text-[#666666] hover:text-[#121212]'
                                  }`}
                              >
                                All Tech
                              </button>
                              <button
                                type="button"
                                onClick={() => setActiveStackTab('frontend')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeStackTab === 'frontend' ? 'bg-white text-[#121212] shadow-sm' : 'text-[#666666] hover:text-[#121212]'
                                  }`}
                              >
                                Frontend
                              </button>
                              <button
                                type="button"
                                onClick={() => setActiveStackTab('backend')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeStackTab === 'backend' ? 'bg-white text-[#121212] shadow-sm' : 'text-[#666666] hover:text-[#121212]'
                                  }`}
                              >
                                Backend
                              </button>
                              <button
                                type="button"
                                onClick={() => setActiveStackTab('database')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeStackTab === 'database' ? 'bg-white text-[#121212] shadow-sm' : 'text-[#666666] hover:text-[#121212]'
                                  }`}
                              >
                                Database
                              </button>
                              <button
                                type="button"
                                onClick={() => setActiveStackTab('cloud')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeStackTab === 'cloud' ? 'bg-white text-[#121212] shadow-sm' : 'text-[#666666] hover:text-[#121212]'
                                  }`}
                              >
                                Cloud & DevOps
                              </button>
                            </div>
                          </div>

                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                            {filteredStack.map((tech) => (
                              <div
                                key={tech.name}
                                style={{
                                  backgroundColor: tech.bg,
                                  color: tech.textColor || '#FFFFFF',
                                  boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
                                }}
                                className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-[4px] font-bold text-xs uppercase tracking-wider border border-black/10 hover:border-black/30 transform hover:scale-108 hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer select-none shadow-xs hover:shadow-lg group/badge"
                              >
                                <span className="w-4 h-4 flex items-center justify-center shrink-0">
                                  <TechIcon type={tech.icon} />
                                </span>
                                <span className="font-extrabold tracking-wide text-[11px] sm:text-xs">
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>

                        </div>
                      </section>

                      {/* 
        ========================================================================
        7. SUGGESTED DELIVERY PHASES (ROADMAP)
        ========================================================================
      */}
                      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-black/[0.06]">
                        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                          <div className="max-w-3xl mb-14">
                            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
                              12. DELIVERY ROADMAP
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] mb-4">
                              Suggested 5-Phase Implementation Strategy
                            </h2>
                            <p className="text-base text-[#555555]">
                              Progressing the current advanced MVP codebase into an enterprise-ready, hardened production platform.
                            </p>
                          </div>

                          {/* 5-Phase Timeline Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
                            {roadmapPhases.map((phase) => (
                              <div
                                key={phase.phase}
                                className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#FF462D]/50 cursor-default"
                              >
                                <div>
                                  <span className="text-xs font-mono font-bold text-[#FF462D] block mb-2 transition-transform duration-300 group-hover:translate-x-1">
                                    {phase.phase}
                                  </span>
                                  <h3 className="text-base font-bold text-[#121212] mb-3 leading-snug group-hover:text-[#FF462D] transition-colors">
                                    {phase.title}
                                  </h3>
                                </div>
                                <p className="text-xs text-[#666666] leading-relaxed mt-2 pt-3 border-t border-black/[0.05]">
                                  {phase.deliverable}
                                </p>
                              </div>
                            ))}
                          </div>

                        </div>
                      </section>

                      {/* 
        ========================================================================
        8. WHY CHOOSE US?
        ========================================================================
      */}
                      <WhyChooseUsSection />

                      {/* 
        ========================================================================
        9. CONNECT WITH US
        ========================================================================
      */}
                      <ConnectWithUsSection onTalkClick={onConsultClick} />

                      {/* 
        ========================================================================
        10. FOOTER
        ========================================================================
      */}
                      <Footer />

                  </div>
                  );
}

