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
  const isKhata = projectId === 'khata-ai';
  const [activeStackTab, setActiveStackTab] = useState('all'); // 'all' | 'frontend' | 'backend' | 'database' | 'cloud'
  const [openModules, setOpenModules] = useState({}); // Track each module independently

  const toggleModule = (idx) => {
    setOpenModules(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // High-level 7-Step Request and Data Flow
  const dataFlowSteps = isKhata
    ? [
        {
          step: '01',
          title: 'Business Owner UI',
          layer: 'Presentation Layer',
          tech: 'React.js & Vite',
          desc: 'Business owner adds products, records sales, or updates inventory from the centralized dashboard.'
        },
        {
          step: '02',
          title: 'REST API Request',
          layer: 'Client Networking',
          tech: 'HTTP / JSON',
          desc: 'React frontend dispatches structured HTTP requests to Express.js REST API endpoints.'
        },
        {
          step: '03',
          title: 'CORS & Validation',
          layer: 'Security Perimeter',
          tech: 'CORS & Middleware',
          desc: 'Backend enforces origin access policies and validates submitted product, billing, and expense payloads.'
        },
        {
          step: '04',
          title: 'Business Logic Engine',
          layer: 'Application Layer',
          tech: 'Node.js & Express.js',
          desc: 'Processes sales transactions, calculates totals, and updates corresponding inventory stock quantities.'
        },
        {
          step: '05',
          title: 'Neon Persistence',
          layer: 'Data Layer',
          tech: 'PostgreSQL on Neon',
          desc: 'Stores structured sales, purchase, supplier, inventory, and expense records persistently.'
        },
        {
          step: '06',
          title: 'Visual & Excel Engine',
          layer: 'Analytics Layer',
          tech: 'Chart.js & ExcelJS',
          desc: 'Transforms business metrics into interactive visual charts and downloadable Excel spreadsheets.'
        },
        {
          step: '07',
          title: 'Live Dashboard Sync',
          layer: 'Response Delivery',
          tech: 'React State Update',
          desc: 'Returns updated records to the React UI so the dashboard reflects real-time business performance.'
        }
      ]
    : [
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
  const techStackBadges = isKhata
    ? [
        { name: 'REACT.JS', category: 'frontend', bg: '#20232A', textColor: '#61DAFB', icon: 'react' },
        { name: 'VITE', category: 'frontend', bg: '#646CFF', textColor: '#FFFFFF', icon: 'vite' },
        { name: 'CHART.JS', category: 'frontend', bg: '#FF6384', textColor: '#FFFFFF', icon: 'code' },
        { name: 'EXCELJS', category: 'frontend', bg: '#217346', textColor: '#FFFFFF', icon: 'code' },
        { name: 'NODE.JS', category: 'backend', bg: '#339933', textColor: '#FFFFFF', icon: 'code' },
        { name: 'EXPRESS.JS', category: 'backend', bg: '#334155', textColor: '#FFFFFF', icon: 'code' },
        { name: 'CORS', category: 'backend', bg: '#0F172A', textColor: '#FFFFFF', icon: 'code' },
        { name: 'POSTGRESQL', category: 'database', bg: '#336791', textColor: '#FFFFFF', icon: 'postgres' },
        { name: 'NEON', category: 'database', bg: '#00E599', textColor: '#000000', icon: 'neon' },
        { name: 'FIREBASE HOSTING', category: 'cloud', bg: '#FFA611', textColor: '#FFFFFF', icon: 'firebase' },
        { name: 'RENDER', category: 'cloud', bg: '#46E3B7', textColor: '#000000', icon: 'render' },
        { name: 'GIT', category: 'cloud', bg: '#F05032', textColor: '#FFFFFF', icon: 'git' },
        { name: 'GITHUB', category: 'cloud', bg: '#181717', textColor: '#FFFFFF', icon: 'github' }
      ]
    : [
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

  const [activeFlowIndex, setActiveFlowIndex] = useState(3);

  return (
    <>
      <div className="relative z-10 min-h-screen bg-[#FAFAF8] text-[#121212] flex flex-col font-sans selection:bg-[#FF462D] selection:text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] mb-[50vh]">

      {/* 
        ========================================================================
        1. HERO BANNER: Full-Screen Coverage with Deep Corner Blackness
        ========================================================================
      */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0C0D] text-white flex flex-col justify-between border-b border-black/[0.08] pt-28 sm:pt-32 lg:pt-36">

        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={isKhata ? '/images/story_team_success_hd.jpg' : '/images/hr1.jpg'}
            alt={isKhata ? 'Khata AI — Business Management SaaS' : 'ERP / Employee Management System'}
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
              <span className="text-white font-medium">
                {isKhata ? 'Khata AI — Business Management SaaS' : 'ERP / Employee Management System'}
              </span>
            </nav>

            {/* Category Eyebrow with Red Line */}
            <div className="mb-3">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#FF462D] font-semibold block">

              </span>
              <div className="w-6 h-[2px] bg-[#FF462D] mt-1.5" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-4 leading-[1.12]">
              {isKhata ? 'Khata AI — Business Management SaaS' : 'ERP / Employee Management System'}
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg lg:text-[19px] text-white/90 font-light leading-relaxed mb-7 max-w-3xl">
              {isKhata
                ? 'Full-stack business management SaaS application helping small and medium-sized businesses manage daily sales, inventory, billing, purchases, expenses, and analytics in one centralized digital platform.'
                : 'Cross-platform ERP and Human Resource Management application unifying employee records, attendance telemetry, leave approvals, salary workflows, and PDF payslips across Web, Android, and iOS.'}
            </p>

            {/* Action CTAs: Button 1: Visit Website, Button 2: Consult Lead */}
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <a
                href={isKhata ? 'https://khata-ai-69e93.web.app/' : 'https://employee-management-system-rose-tau.vercel.app/'}
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
                <span>
                  {isKhata
                    ? 'Frontend: React.js, Vite, Chart.js & ExcelJS (Firebase)'
                    : 'Cross-Platform: Web, Android & iOS (React Native)'}
                </span>
              </div>
              <div className="py-4 sm:py-5 md:px-6 flex items-center gap-3 text-sm text-white/90">
                <Server className="w-5 h-5 text-[#FF462D] shrink-0" />
                <span>
                  {isKhata
                    ? 'Backend: Node.js & Express.js REST APIs (Render)'
                    : 'Backend: Java 17 & Spring Boot 3.2.4 REST APIs'}
                </span>
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
        2. PROJECT AT A GLANCE & CLIENT DISCUSSION DOSSIER (NURA-INSPIRED EDITORIAL UI)
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] border-b border-black/[0.05]">
        <div className="w-full px-6 sm:px-10 lg:px-16">

          {/* 1. PROJECT AT A GLANCE — Full-Page Horizontal */}
          <div className="w-full">
            <span className="inline-block px-3 py-1 rounded-md bg-[#EAEAEA] text-[#555555] text-xs font-medium tracking-tight mb-5">
              1. Project at a Glance
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.12] text-[#111111] mb-8 w-full">
              {isKhata ? (
                <>
                  Replacing manual registers{' '}
                  <span className="text-[#8E8E93]">and scattered spreadsheets,</span>{' '}
                  built for unified business control.
                </>
              ) : (
                <>
                  Bridging employee workflows{' '}
                  <span className="text-[#8E8E93]">and enterprise governance,</span>{' '}
                  built for clarity and real-time control.
                </>
              )}
            </h2>

            {/* Single Unified Narrative */}
            <div className="mb-14 w-full">
              <p className="text-lg sm:text-xl lg:text-[23px] font-normal tracking-[-0.015em] text-[#3A3A3C] leading-[1.55]">
                {isKhata ? (
                  <>
                    Many small businesses manage their sales, purchases, inventory, expenses, supplier information, and financial records separately—making it difficult to maintain accurate records, monitor stock levels, calculate revenue and expenses, and understand overall business performance. So we came up with{' '}
                    <span className="font-semibold text-[#111111]">Khata AI</span>—delivering a centralized business dashboard, sales and billing management, real-time inventory tracking, supplier and purchase records, expense management, and visual reporting with Excel exports in one unified platform.
                  </>
                ) : (
                  <>
                    In many growing organisations, employee information and routine HR activities are scattered across spreadsheets, paper forms, chat messages, and disconnected tools—creating record inconsistencies, attendance disputes, and payroll exposure. So we came up with the{' '}
                    <span className="font-semibold text-[#111111]">ERP / Employee Management System</span>—delivering centralized digital employee dossiers, real-time multi-outlet attendance tracking, structured leave approvals, 3-state salary workflows, and automated PDF payslips in one unified platform.
                  </>
                )}
              </p>
            </div>

            {/* Horizontal 5-Card Key Value Pillars (Nura Card Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {(isKhata
                ? [
                    {
                      title: 'Business Analytics',
                      desc: 'Centralized dashboard displaying total sales, revenue, expenses, and stock trends via Chart.js.',
                      icon: Activity
                    },
                    {
                      title: 'Sales & Billing',
                      desc: 'Digital customer transactions with organized quantities, prices, and automated billing totals.',
                      icon: FileSpreadsheet
                    },
                    {
                      title: 'Inventory Control',
                      desc: 'Real-time stock updates on every purchase and sale with low-stock visibility.',
                      icon: Layers
                    },
                    {
                      title: 'Purchase & Suppliers',
                      desc: 'Structured supplier directory and incoming purchase history tracking.',
                      icon: Building2
                    },
                    {
                      title: 'Financials & Exports',
                      desc: 'Centralized expense tracking and ExcelJS spreadsheet reporting.',
                      icon: FileText
                    }
                  ]
                : [
                    {
                      title: 'Identity Dossiers',
                      desc: 'Consolidated employee records and digital identity profiles in one place.',
                      icon: Users
                    },
                    {
                      title: 'Attendance Telemetry',
                      desc: 'Real-time check-in/out tracking across multi-outlet locations.',
                      icon: Clock
                    },
                    {
                      title: 'Leave Workflows',
                      desc: 'Structured multi-tier leave authorization and status visibility.',
                      icon: CalendarCheck
                    },
                    {
                      title: 'Salary Approvals',
                      desc: '3-state compensation approval engine from Pending to Approved.',
                      icon: ShieldCheck
                    },
                    {
                      title: 'PDF Payslips',
                      desc: 'Standardized payroll synthesis and binary PDF payslip generation.',
                      icon: FileText
                    }
                  ]
              ).map((item, idx) => {
                const CardIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#141414] text-white flex items-center justify-center mb-10 transition-transform duration-200 group-hover:scale-105">
                      <CardIcon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-[#111111] tracking-[-0.02em] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#6E6E73] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* // CLIENT DISCUSSION DOSSIER — Nura Minimalist Bento UI */}
          <div className="mt-20 pt-16 border-t border-black/[0.06]">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-[-0.03em] leading-[1.16] text-[#111111] mb-10 w-full">
              Technical specification{' '}
              <span className="text-[#8E8E93]">and platform blueprint,</span>{' '}
              engineered for scale.
            </h3>

            {/* Clean Full-Width Tabular Specification View */}
            <div className="bg-white rounded-2xl border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] border-b border-black/[0.06]">
                      <th className="py-4 px-6 sm:px-8 text-xs font-semibold uppercase tracking-wider text-[#6E6E73] w-[28%]">
                        Specification
                      </th>
                      <th className="py-4 px-6 sm:px-8 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                        Technology & Blueprint
                      </th>
                      <th className="py-4 px-6 sm:px-8 text-xs font-semibold uppercase tracking-wider text-[#6E6E73] text-right hidden sm:table-cell w-[18%]">
                        Layer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.05]">
                    {(isKhata
                      ? [
                          { label: 'Project Category', val: 'Full-Stack Business Management SaaS Application', layer: 'Domain', icon: Layers },
                          { label: 'Frontend & UI', val: 'React.js, Vite, Chart.js & ExcelJS', layer: 'UI Layer', icon: Cpu },
                          { label: 'Backend Architecture', val: 'Node.js & Express.js REST API', layer: 'API Layer', icon: Server },
                          { label: 'Security & Access', val: 'CORS Origin Control & Request Payload Validation', layer: 'Security', icon: ShieldCheck },
                          { label: 'Database Cloud', val: 'PostgreSQL Hosted on Neon Serverless', layer: 'Persistence', icon: Database },
                          { label: 'Frontend Hosting', val: 'Firebase Hosting (CDN & Web)', layer: 'Web Cloud', icon: Activity },
                          { label: 'Backend & SCM', val: 'Render Cloud Service, Git & GitHub', layer: 'Infrastructure', icon: GitBranch }
                        ]
                      : [
                          { label: 'Project Category', val: 'Cross-platform ERP & HR Management Application', layer: 'Domain', icon: Layers },
                          { label: 'Target Platforms', val: 'Web, Android, and iOS', layer: 'Clients', icon: Smartphone },
                          { label: 'Frontend Technology', val: 'React Native 0.81.5, Expo ~54 & TypeScript ~5.9', layer: 'UI Layer', icon: Cpu },
                          { label: 'Backend Architecture', val: 'Java 17 & Spring Boot 3.2.4 REST API', layer: 'API Layer', icon: Server },
                          { label: 'Security & Auth', val: 'Stateless JJWT Bearer Tokens + Spring Security RBAC', layer: 'Security', icon: ShieldCheck },
                          { label: 'Database Cloud', val: 'PostgreSQL Hosted on Neon Serverless (SSL)', layer: 'Persistence', icon: Database },
                          { label: 'Deployment Targets', val: 'Vercel (Web), Render (API), EAS Build (Mobile)', layer: 'Infrastructure', icon: Activity }
                        ]
                    ).map((spec, sIdx) => {
                      const SpecIcon = spec.icon;
                      return (
                        <tr
                          key={sIdx}
                          className="group hover:bg-[#F7F7F7]/80 transition-colors duration-150"
                        >
                          <td className="py-4 sm:py-5 px-6 sm:px-8">
                            <div className="flex items-center gap-3.5">
                              <div className="w-8 h-8 rounded-lg bg-[#141414] text-white flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                                <SpecIcon className="w-4 h-4" />
                              </div>
                              <span className="text-sm sm:text-[15px] font-semibold text-[#111111]">
                                {spec.label}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 sm:py-5 px-6 sm:px-8 text-sm sm:text-[15px] text-[#3A3A3C] font-medium">
                            {spec.val}
                          </td>
                          <td className="py-4 sm:py-5 px-6 sm:px-8 text-right hidden sm:table-cell">
                            <span className="inline-block px-2.5 py-1 rounded-md bg-[#F2F2F2] text-[#555555] text-xs font-medium">
                              {spec.layer}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        3. DIRECTED GRAPH: 7-Step High-Level Request & Data Flow (GLOWING NODE-GRAPH TEMPLATE)
        ========================================================================
      */}
      <section id="system-architecture" className="py-20 lg:py-28 bg-[#F7F7F7] border-b border-black/[0.05]">
        <div className="w-full px-6 sm:px-10 lg:px-16">

          {/* Editorial Header */}
          <div className="w-full mb-10">
            <span className="inline-block px-3 py-1 rounded-md bg-[#EAEAEA] text-[#555555] text-xs font-medium tracking-tight mb-5">
              End-to-End Data Flow
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.14] text-[#111111] mb-4">
              High-Level Request{' '}
              <span className="text-[#8E8E93]">and Data Flow,</span>{' '}
              from touchpoint to Neon PostgreSQL.
            </h2>

            <p className="text-[15px] sm:text-base text-[#555555] leading-relaxed">
              Interactive architecture flow tracing an authenticated request from React Native touchpoints through Spring Security to Neon Serverless PostgreSQL.
            </p>
          </div>

          {/* Deep Midnight Navy Interactive Node-Graph Canvas */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#020617] via-[#040E29] to-[#020718] border border-[#1E3A8A]/40 shadow-[0_24px_80px_rgba(2,8,27,0.45)] p-6 sm:p-10 lg:p-12 overflow-hidden text-white">

            {/* Ambient Cyan / Electric Blue Glows */}
            <div className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-[#0070F3]/20 blur-[130px]" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-[#00D2FF]/15 blur-[120px]" />

            {/* Desktop Interactive Node-Graph Diagram (lg+) */}
            <div className="hidden lg:block relative w-full h-[460px]">
              {/* SVG Curved Connector Paths & Arrowheads */}
              <svg
                viewBox="0 0 1000 460"
                className="absolute inset-0 w-full h-full pointer-events-none"
                fill="none"
              >
                <defs>
                  <marker id="flow-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38BDF8" />
                  </marker>
                  <marker id="flow-arrow-dim" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563EB" />
                  </marker>
                </defs>

                {/* 01 User Interaction -> 02 API Request Dispatch */}
                <path
                  d="M 205 215 L 265 215"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  markerEnd="url(#flow-arrow)"
                />
                <text x="235" y="185" textAnchor="middle" fill="#94A3B8" fontSize="12" fontFamily="sans-serif">
                  Activity
                </text>

                {/* 02 API Request Dispatch -> 03 Session Token Injection (Top Curve) */}
                <path
                  d="M 380 180 C 380 100, 410 72, 448 72"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                  markerEnd="url(#flow-arrow-dim)"
                />
                <text x="388" y="102" textAnchor="end" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">
                  Bearer JWT
                </text>

                {/* 03 Session Token Injection -> 04 Security Verification */}
                <path
                  d="M 675 72 C 712 72, 715 128, 700 170"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                  markerEnd="url(#flow-arrow)"
                />

                {/* 04 Security Verification -> 05 Business Processing */}
                <path
                  d="M 620 245 C 580 280, 560 290, 545 305"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                  markerEnd="url(#flow-arrow)"
                />

                {/* 05 Business Processing -> 06 Data Persistence */}
                <path
                  d="M 555 342 C 620 342, 640 385, 688 395"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeOpacity="0.85"
                  markerEnd="url(#flow-arrow-dim)"
                />
                <text x="615" y="388" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">
                  JPA / SSL
                </text>

                {/* 04 Security Verification / 06 Data Persistence -> 07 Response / PDF Render */}
                <path
                  d="M 885 360 L 885 118"
                  stroke="#1E40AF"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  markerEnd="url(#flow-arrow)"
                />

                {/* 07 Response / PDF Render -> 02 API Request Dispatch (Return Path) */}
                <path
                  d="M 755 35 C 560 -5, 340 15, 330 175"
                  stroke="#1E40AF"
                  strokeWidth="1.25"
                  strokeOpacity="0.6"
                  strokeDasharray="4 4"
                  markerEnd="url(#flow-arrow-dim)"
                />
                <text x="305" y="295" textAnchor="middle" fill="#94A3B8" fontSize="12" fontFamily="sans-serif">
                  JSON / PDF
                </text>
                <path
                  d="M 425 330 C 350 330, 335 280, 335 252"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  markerEnd="url(#flow-arrow)"
                />
              </svg>

              {/* Positioned Glowing Pill Nodes */}
              {[
                { idx: 0, icon: Smartphone, style: 'left-[1%] top-[39%] w-[205px]' },
                { idx: 1, icon: Workflow, style: 'left-[27%] top-[39%] w-[210px]' },
                { idx: 2, icon: Lock, style: 'left-[45%] top-[6%] w-[230px]' },
                { idx: 3, icon: ShieldCheck, style: 'left-[57%] top-[37%] w-[250px]', hero: true },
                { idx: 4, icon: Cpu, style: 'left-[42%] top-[66%] w-[230px]' },
                { idx: 5, icon: Database, style: 'left-[69%] top-[78%] w-[240px]' },
                { idx: 6, icon: FileText, style: 'left-[74%] top-[6%] w-[240px]' }
              ].map(({ idx, icon: NodeIcon, style }) => {
                const step = dataFlowSteps[idx];
                const isActive = activeFlowIndex === idx;
                const isHero = idx === 3;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onMouseEnter={() => setActiveFlowIndex(idx)}
                    onClick={() => setActiveFlowIndex(idx)}
                    className={`absolute ${style} text-left rounded-full p-2 pr-5 flex items-center gap-3.5 transition-all duration-300 cursor-pointer ${
                      isHero
                        ? 'bg-gradient-to-r from-[#00D2FF] via-[#1E7BFF] to-[#0052FF] text-white shadow-[0_0_38px_rgba(0,180,255,0.45)] border border-[#7DD3FC]/60 scale-[1.03]'
                        : isActive
                        ? 'bg-[#0B1E48] border border-[#38BDF8] shadow-[0_0_28px_rgba(56,189,248,0.35)] scale-[1.02]'
                        : 'bg-[#06122E]/95 border border-[#2563EB]/60 shadow-[0_0_22px_rgba(37,99,235,0.2)] hover:border-[#38BDF8] hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        isHero
                          ? 'bg-[#031338] text-[#38BDF8]'
                          : 'bg-[#0A1D45] border border-[#38BDF8]/40 text-[#38BDF8]'
                      }`}
                    >
                      <NodeIcon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0">
                      <span className={`text-[10px] font-medium block leading-none mb-1 ${isHero ? 'text-white/85' : 'text-[#7DD3FC]/80'}`}>
                        {step.step} · {step.layer}
                      </span>
                      <span className="text-[13.5px] font-medium text-white block truncate leading-tight">
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile & Tablet Vertical Connected Pill Flow (< lg) */}
            <div className="lg:hidden flex flex-col gap-3">
              {dataFlowSteps.map((step, idx) => {
                const icons = [Smartphone, Workflow, Lock, ShieldCheck, Cpu, Database, FileText];
                const NodeIcon = icons[idx];
                const isHero = idx === 3;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveFlowIndex(idx)}
                    className={`rounded-2xl p-4 flex items-start gap-3.5 transition-all cursor-pointer ${
                      isHero
                        ? 'bg-gradient-to-r from-[#00D2FF] via-[#1E7BFF] to-[#0052FF] text-white shadow-[0_0_30px_rgba(0,180,255,0.35)] border border-[#7DD3FC]/60'
                        : 'bg-[#06122E]/95 border border-[#2563EB]/50'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        isHero
                          ? 'bg-[#031338] text-[#38BDF8]'
                          : 'bg-[#0A1D45] border border-[#38BDF8]/40 text-[#38BDF8]'
                      }`}
                    >
                      <NodeIcon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className={`text-[11px] font-medium ${isHero ? 'text-white/85' : 'text-[#7DD3FC]/80'}`}>
                          Step {step.step} · {step.layer}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${isHero ? 'bg-white/20 text-white' : 'bg-[#0A1D45] text-[#93C5FD]'}`}>
                          {step.tech}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-white mb-1">{step.title}</h3>
                      <p className={`text-xs leading-relaxed ${isHero ? 'text-white/90' : 'text-slate-300'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Interactive Step Inspector Bar */}
            <div className="mt-8 pt-6 border-t border-[#1E3A8A]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="px-3 py-1 rounded-full bg-[#0070F3]/20 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-medium shrink-0">
                  Step {dataFlowSteps[activeFlowIndex].step}
                </span>
                <div>
                  <div className="text-sm font-medium text-white">
                    {dataFlowSteps[activeFlowIndex].title}{' '}
                    <span className="text-[#7DD3FC]/80 font-normal">
                      — {dataFlowSteps[activeFlowIndex].layer}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 mt-0.5">
                    {dataFlowSteps[activeFlowIndex].desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0A1D45] border border-[#2563EB]/60 text-xs font-medium text-[#93C5FD]">
                  {dataFlowSteps[activeFlowIndex].tech}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        4. ROLE-BASED ACCESS CONTROL / KEY FEATURES MATRIX
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] border-b border-black/[0.05]">
        <div className="w-full px-6 sm:px-10 lg:px-16">

          <div className="w-full mb-14">
            <span className="inline-block px-3 py-1 rounded-md bg-[#EAEAEA] text-[#555555] text-xs font-medium tracking-tight mb-5">
              {isKhata ? '4. Key Features & Objectives' : '4. User Roles & Access Control'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.14] text-[#111111] mb-4">
              {isKhata ? (
                <>
                  Core Capabilities{' '}
                  <span className="text-[#8E8E93]">for unified SMB operations.</span>
                </>
              ) : (
                <>
                  8 Segregated Roles{' '}
                  <span className="text-[#8E8E93]">for complete enterprise governance.</span>
                </>
              )}
            </h2>
            <p className="text-[15px] sm:text-base text-[#555555] leading-relaxed">
              {isKhata
                ? 'Bringing sales, inventory, billing, purchasing, expenses, and visual analytics together into one accessible digital assistant.'
                : 'The frontend uses Expo Router route groups for role segregation, while Spring Security validates authorities on every API endpoint.'}
            </p>
          </div>

          {/* 8 Cards Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {(isKhata
              ? [
                  {
                    role: 'Business Dashboard & Analytics',
                    scope: 'Overview of total sales, revenue, expenses, and inventory status with visual charts and trend comparisons.'
                  },
                  {
                    role: 'Sales & Billing Management',
                    scope: 'Record customer transactions with organized product quantities, unit prices, total amounts, and billing history.'
                  },
                  {
                    role: 'Inventory Management',
                    scope: 'Maintain product catalogs and automatically update stock quantities on purchases and sales to prevent shortages.'
                  },
                  {
                    role: 'Purchase & Supplier Management',
                    scope: 'Track supplier directories, incoming product quantities, purchase orders, and historical purchasing records.'
                  },
                  {
                    role: 'Expense & Financial Management',
                    scope: 'Organize daily business expenses alongside sales in one centralized system for clearer financial visibility.'
                  },
                  {
                    role: 'Data Visualization & Reporting',
                    scope: 'Interactive Chart.js graphs paired with ExcelJS spreadsheet support for working with business reports.'
                  },
                  {
                    role: 'Overall Objective',
                    scope: 'Make business management simpler and accessible for small businesses without expensive enterprise software.'
                  },
                  {
                    role: 'Future AI Insights',
                    scope: 'Extensible toward automated business insights, demand forecasting, inventory recommendations, and predictive restocking.'
                  }
                ]
              : userRoles
            ).map((r, rIdx) => (
              <div
                key={rIdx}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#141414] text-white flex items-center justify-center mb-8 text-xs font-medium tracking-tight transition-transform duration-200 group-hover:scale-105">
                    0{rIdx + 1}
                  </div>

                  <h3 className="text-[17px] font-bold text-[#111111] tracking-[-0.02em] mb-2">
                    {r.role}
                  </h3>

                  <p className="text-[13px] text-[#6E6E73] leading-relaxed">
                    {r.scope}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-black/[0.05] flex items-center justify-between text-xs font-medium text-[#8E8E93]">
                  <span>{isKhata ? 'Khata AI Module' : 'Role Segregation'}</span>
                  <ShieldCheck className="w-4 h-4 text-[#141414] transition-transform duration-200 group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. FULL TECHNOLOGY STACK SPECIFICATION: SHIELDS / BADGES FORMAT
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="w-full px-6 sm:px-10 lg:px-16">

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

      </div>

      {/* 
        ========================================================================
        10. FOOTER (Fixed 50vh Curtain Reveal matching HomePage)
        ========================================================================
      */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-auto overflow-hidden">
        <Footer />
      </div>
    </>
  );
}

