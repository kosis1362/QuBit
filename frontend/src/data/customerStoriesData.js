import {
  Clock,
  Users,
  CheckCircle2,
  BarChart3,
  Building2,
  CalendarCheck,
  Timer,
  CalendarX,
  Calculator,
  FileX,
  AlertCircle,
  MapPin,
  Layers,
  Briefcase,
  FileSpreadsheet,
  Compass
} from 'lucide-react';

export const CUSTOMER_STORIES_DATA = {
  'erp-system': {
    id: 'erp-system',
    breadcrumb: 'Enterprise ERP Transformation',
    eyebrow: 'CUSTOMER STORY // OPERATIONAL TRANSFORMATION',
    title: 'The Hidden Cost of Managing a Business Without an ERP System',
    quote:
      "A business doesn't lose time only when work stops. Sometimes, it loses time every day through small tasks that never seem to end.",
    ctaLabel: 'Consult Our ERP Architects',
    heroMedia: {
      type: 'image',
      src: '/images/hr1.jpg',
      alt: 'The Hidden Cost of Managing a Business Without an ERP System'
    },
    highlights: [
      { icon: Building2, color: 'text-[#FF462D]', text: '100+ Employees Across Multiple Outlets' },
      { icon: Timer, color: 'text-[#00897B]', text: '94% Drop in Weekly Administrative Chasing' },
      { icon: CheckCircle2, color: 'text-[#FF462D]', text: '100% End-of-Month Payroll Calculation Precision' }
    ],
    intro: {
      eyebrow: 'THE REALITY OF SCALE',
      heading: 'A story every growing organisation can relate to',
      lead: 'Imagine a growing company with 100 employees, multiple departments and several outlets.',
      paragraphs: [
        {
          prefix: 'Every morning, the HR team starts its day with ',
          highlight: 'spreadsheets, WhatsApp messages and phone calls',
          suffix:
            '. One employee wants to apply for leave, another needs to correct their attendance, and someone else is asking for their salary details.'
        },
        'The HR manager has to search through different files just to find the right employee record.',
        'Meanwhile, employees are marking attendance manually. Managers are sending updates through messages, and the accounts team is waiting for salary information from HR to prepare payroll.'
      ]
    },
    complicationsSection: {
      eyebrow: 'THE END-OF-MONTH SPIRAL',
      heading: 'At the end of the month, things become even more complicated',
      cardTag: 'COMPLICATION',
      summaryLead:
        'The HR team spends more time collecting information than actually managing people. Managers spend time following up, employees wait for updates, and business owners struggle to get reliable information when they need it.',
      summarySub: 'As the organisation grows, these small problems become bigger operational challenges.'
    },
    complications: [
      {
        num: '01',
        title: 'Attendance confusion',
        icon: Clock,
        quote: 'Some employees forget to mark attendance, while others report incorrect working hours.',
        impact: 'HR spends 12+ hours every month reconciling shifts and fixing conflicting clock-ins across different outlets.'
      },
      {
        num: '02',
        title: 'Leave management delays',
        icon: CalendarX,
        quote: "Leave requests get buried in messages, and employees don't know whether their requests have been approved.",
        impact: 'Unplanned staffing shortages at branch outlets and frustrated employees left waiting days for basic confirmations.'
      },
      {
        num: '03',
        title: 'Payroll mistakes',
        icon: Calculator,
        quote: 'HR has to collect attendance, leave and salary information from different sources, increasing the chances of calculation errors.',
        impact: 'Salary miscalculations, overtime disputes, delayed disbursement, and high anxiety for both accounts and staff.'
      },
      {
        num: '04',
        title: 'Lost employee records',
        icon: FileX,
        quote: 'Important documents and personal information are scattered across folders and spreadsheets.',
        impact: 'Missing compliance paperwork, inability to retrieve historical records quickly, and vulnerability to data loss.'
      },
      {
        num: '05',
        title: 'Lack of transparency',
        icon: AlertCircle,
        quote: 'Employees repeatedly contact HR to ask about their attendance, leave balance and salary status.',
        impact: 'Constant interruptions for the HR manager, diverting dozens of hours away from employee retention and development.'
      },
      {
        num: '06',
        title: 'Management difficulties',
        icon: Building2,
        quote: 'Business owners struggle to get a clear picture of employee performance, attendance and operations across different outlets.',
        impact: 'Decisions based on weeks-old estimates rather than real-time operational data, restricting strategic expansion.'
      }
    ],
    turningPoint: {
      eyebrow: 'THE ROOT CAUSE',
      headingLine1: "The real problem isn't the people.",
      headingAccent: "It's the process.",
      description:
        'Without a centralised system, every department works with disconnected information. Even simple tasks require multiple conversations, manual updates and unnecessary follow-ups.',
      quote:
        '"When information is scattered, work becomes complicated. When everything is connected, people can focus on what really matters."',
      attribution: '— The idea behind a connected ERP system'
    },
    solutionSection: {
      eyebrow: 'THE CONNECTED ARCHITECTURE',
      heading: 'What if everything worked from one place?',
      leadPrefix: "That's where the",
      leadHighlight: 'ERP / Employee Management System',
      leadSuffix: 'comes in.',
      description:
        'A single platform where employees can manage their profiles, attendance and leave requests; HR can manage employee records and approvals; managers can monitor operations; and administrators can access the information they need.',
      featuresLabel: 'CONNECTED FEATURES & TOOLS',
      bannerEyebrow: 'CONNECTED ARCHITECTURE // ZERO TOOL SCATTER',
      bannerHeading:
        'Instead of chasing information across multiple tools, everyone works through one organised system.',
      bannerDesc:
        'The goal is simple: less manual work, better visibility, smoother operations and more time to focus on growing the business.',
      bannerCta: 'Build Your Custom ERP'
    },
    solutionPillars: [
      {
        role: 'Employees',
        icon: Users,
        points: [
          'One-tap geo-fenced mobile & biometric attendance',
          'Instant leave applications with real-time approval status',
          'Self-access to salary slips, tax breakdowns, and attendance history',
          'Zero need to ping HR for routine record questions'
        ]
      },
      {
        role: 'HR Managers',
        icon: CalendarCheck,
        points: [
          'Consolidated digital dossier for all 100+ employees',
          'One-click automated leave approvals & shift reallocations',
          'Direct automated export to payroll with zero manual math',
          'Complete compliance tracking and automated document renewal alerts'
        ]
      },
      {
        role: 'Outlet & Team Managers',
        icon: Building2,
        points: [
          'Live headcount dashboard across all retail/branch outlets',
          'Instant overtime alerts and automated shift swap management',
          'Elimination of fragmented WhatsApp groups and lost updates',
          'Objective performance and punctuality metrics for every shift'
        ]
      },
      {
        role: 'Business Owners & Leadership',
        icon: BarChart3,
        points: [
          'Real-time multi-branch workforce analytics and labor cost trends',
          'Total operational transparency with zero reliance on manual reports',
          'Single source of truth with bank-grade role-based access control',
          'Scalable infrastructure that grows seamlessly from 100 to 1,000+ staff'
        ]
      }
    ]
  },

  'real-estate-hub': {
    id: 'real-estate-hub',
    breadcrumb: 'Luxe Real Estate Hub',
    eyebrow: 'CUSTOMER STORY // PROPTECH & CLOUD MODERNIZATION',
    title: 'Smart Real Estate & PropTech: Digitizing Property Management',
    quote:
      "A great property isn't hard to value—it's hard to discover when listings, maps, and buyer-seller workflows live in disconnected silos.",
    ctaLabel: 'Consult Our PropTech Architects',
    heroMedia: {
      type: 'video',
      src: '/videos/real_estate_5s.mp4',
      alt: 'Smart Real Estate & PropTech: Digitizing Property Management'
    },
    highlights: [
      { icon: Building2, color: 'text-[#FF462D]', text: 'Centralized Multi-User Property & Listing Hub' },
      { icon: Compass, color: 'text-[#00897B]', text: 'Interactive Mapbox Geospatial Discovery' },
      { icon: CheckCircle2, color: 'text-[#FF462D]', text: 'Seamless Buyer, Seller & Agent Workflows' }
    ],
    intro: {
      eyebrow: 'THE REALITY OF FRAGMENTED LISTINGS',
      heading: 'A challenge every growing real estate business faces',
      lead: 'Imagine a fast-moving real estate agency managing hundreds of residential and commercial properties across multiple neighborhoods.',
      paragraphs: [
        {
          prefix: 'Every day, buyers and brokers waste hours sifting through ',
          highlight: 'scattered spreadsheets, static PDFs, and chat threads',
          suffix:
            ' just to verify which properties are still available, what their exact neighborhood boundaries look like, and who is handling each viewing.'
        },
        'Prospective buyers struggle to explore listings by real location, transit access, and neighborhood context.',
        'Meanwhile, sellers wait for manual listing updates, agents juggle duplicate inquiries across channels, and agency teams lack a single source of truth for property inventory.'
      ]
    },
    complicationsSection: {
      eyebrow: 'THE DISCOVERY BOTTLENECK',
      heading: 'As property portfolios grow, fragmented workflows slow every deal',
      cardTag: 'CHALLENGE',
      summaryLead:
        'Agents spend more time manually answering basic location and availability questions than closing deals. Buyers abandon searches when listings lack geospatial clarity, and sellers lose visibility into listing performance.',
      summarySub: 'Without unified digital infrastructure, scaling property inventory only multiplies friction.'
    },
    complications: [
      {
        num: '01',
        title: 'Fragmented property listings',
        icon: Layers,
        quote: 'Property details sit across spreadsheets, social feeds, and disconnected portals with inconsistent specs.',
        impact: 'Buyers encounter conflicting prices and duplicate entries, while agents spend hours updating the same listing in multiple places.'
      },
      {
        num: '02',
        title: 'Limited location-based visibility',
        icon: MapPin,
        quote: 'Static text addresses fail to show neighborhood context, nearby amenities, or true spatial proximity.',
        impact: 'High drop-off during property discovery and unnecessary site visits for homes that do not match buyer location needs.'
      },
      {
        num: '03',
        title: 'Slow buyer-seller handoffs',
        icon: Clock,
        quote: 'Inquiries get buried in emails and messaging apps before reaching the right listing agent.',
        impact: 'Delayed responses cause motivated buyers to move on to competing properties within hours.'
      },
      {
        num: '04',
        title: 'Outdated availability status',
        icon: AlertCircle,
        quote: 'Sold, leased, or under-offer units remain visible as available due to manual status updates.',
        impact: 'Erodes buyer trust and wastes agent scheduling capacity on unavailable inventory.'
      },
      {
        num: '05',
        title: 'Scattered media & dossiers',
        icon: FileSpreadsheet,
        quote: 'Floor plans, high-resolution photography, and property specs live in separate local folders.',
        impact: 'Incomplete property cards and slow turnaround when preparing client-ready property briefs.'
      },
      {
        num: '06',
        title: 'Limited portfolio insights',
        icon: Building2,
        quote: 'Brokers and owners lack live metrics on regional demand, saved listings, and conversion velocity.',
        impact: 'Pricing and marketing decisions rely on guesswork instead of real-time buyer discovery signals.'
      }
    ],
    turningPoint: {
      eyebrow: 'THE ROOT CAUSE',
      headingLine1: "The real problem isn't the market.",
      headingAccent: "It's the disconnected experience.",
      description:
        'Without a unified PropTech platform, buyers cannot explore properties spatially, and agencies rely on manual follow-ups to bridge every gap between listing and closing.',
      quote:
        '"When property data is scattered, discovery slows to a crawl. When listings, maps, and workflows are unified, every transaction moves effortlessly."',
      attribution: '— The idea behind Luxe Real Estate Hub'
    },
    solutionSection: {
      eyebrow: 'THE CONNECTED ARCHITECTURE',
      heading: 'What if discovery, mapping, and listings worked from one place?',
      leadPrefix: "That's where",
      leadHighlight: 'Luxe Real Estate Hub',
      leadSuffix: 'comes in.',
      description:
        'A cloud-based PropTech platform integrating interactive Mapbox geospatial services, centralized listing management, and seamless multi-user workflows for buyers, sellers, and agencies.',
      featuresLabel: 'CONNECTED FEATURES & TOOLS',
      bannerEyebrow: 'CONNECTED ARCHITECTURE // GEOSPATIAL PROPTECH',
      bannerHeading:
        'Instead of juggling scattered portals and manual calls, everyone connects through one intelligent real estate hub.',
      bannerDesc:
        'The goal is simple: instant geospatial discovery, verified listings, faster closings, and seamless multi-user experiences.',
      bannerCta: 'Build Your PropTech Platform'
    },
    solutionPillars: [
      {
        role: 'Buyers & Investors',
        icon: Users,
        points: [
          'Interactive Mapbox geospatial search with live neighborhood pins',
          'Smart multi-criteria filtering by price, property type, and amenities',
          'Rich property cards with high-res galleries and clear specifications',
          'Direct inquiry and viewing request workflows with zero friction'
        ]
      },
      {
        role: 'Sellers & Property Owners',
        icon: Building2,
        points: [
          'Streamlined self-service property submission and media uploads',
          'Accurate map pin placement for instant neighborhood visibility',
          'Real-time listing status updates (Available, Under Offer, Sold)',
          'Transparent visibility into buyer interest and inquiry activity'
        ]
      },
      {
        role: 'Agents & Brokers',
        icon: Briefcase,
        points: [
          'Centralized listing dashboard eliminating duplicate spreadsheet work',
          'Structured buyer leads tied directly to specific property IDs',
          'Instant sharing of verified property links and geospatial views',
          'Faster qualification and scheduling across multi-property portfolios'
        ]
      },
      {
        role: 'Platform Admins & Agencies',
        icon: BarChart3,
        points: [
          'Cloud-native backend ensuring fast search and high availability',
          'Role-based access control for buyers, sellers, and moderators',
          'Unified portfolio oversight across cities and property segments',
          'Scalable architecture ready for thousands of concurrent listings'
        ]
      }
    ]
  }
};
